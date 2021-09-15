using Day.Office.Api.Clients;
using Day.Office.Api.Data.Repositories;
using Day.Office.Api.Dtos;
using Day.Office.Api.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Day.Office.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AgendamentoController : ControllerBase
    {
        private readonly IFuncionarioRepository _funcionarioRepository;
        private readonly IAgendamentoRepository _agendamentoRepository;
        private readonly IGraphApi _graphApi;

        public AgendamentoController(IAgendamentoRepository agendamentoRepository, IFuncionarioRepository funcionarioRepository, IGraphApi graphApi)
        {
            _agendamentoRepository = agendamentoRepository;
            _funcionarioRepository = funcionarioRepository;
            _graphApi = graphApi;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CadastrarAgendamento([FromBody] CriarAgendamentoRequest novoAgendamento)
        {
            var claimIdentity = User.Identity as ClaimsIdentity;            
            var emailFuncionario = claimIdentity.FindFirst("preferred_username").Value;            

            var funcionario = await _funcionarioRepository.ObterFuncionarioPorEmail(emailFuncionario);
            if (funcionario == null)
            {
                var infomacoesUsuario = await _graphApi.ObterInformacoesUsuario(novoAgendamento.MicrosoftJwt);
                funcionario = new Funcionario(infomacoesUsuario.DisplayName, infomacoesUsuario.UserPrincipalName, infomacoesUsuario.Id);

                await _funcionarioRepository.AdicionarFuncionario(funcionario);
            }
            var agendamento = new Agendamento(
                novoAgendamento.Data.Date, 
                novoAgendamento.CheckIn, 
                novoAgendamento.CheckOut, 
                funcionario.Id, 
                novoAgendamento.IdEstacaoTrabalho
            );

            var resultado = await _agendamentoRepository.AdicionarAgendamento(agendamento);
            if (resultado)
            {
                var request = new CreateEventRequest()
                {
                    Subject = $"Day Office - {novoAgendamento.Data.Date.ToString("dd-MM-yyyy")}",
                    AllowNewTimeProposals = true,
                    ShowAs = "free",
                    Body = new Body(),
                    End = new End(novoAgendamento.CheckOut),
                    Start = new Start(novoAgendamento.CheckIn)
                };
                await _graphApi.CriarEventoCalendarioMicrosoft(novoAgendamento.MicrosoftJwt, request);

                var response = new AgendamentoDto(){
                    Id = agendamento.Id,
                    Data = novoAgendamento.Data.Date.ToString("dd-MM-yyyy"),
                    HoraInicial = novoAgendamento.CheckIn.ToString("HH:ss"),
                    HoraFinal = novoAgendamento.CheckOut.ToString("HH:ss"),
                    NomeFuncionario = funcionario.NomeCompleto
                };

                return Ok(response);
            }
            return BadRequest();
        }
        [HttpGet]
        public async Task<IActionResult> ListarAgendamentos()
        {
            var agendamentos = await _agendamentoRepository.ObterAgendamentos();

            return Ok(agendamentos);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObterAgendamento([FromRoute] int id)
        {
            var agendamento = await _agendamentoRepository.ObterAgendamento(id);
            if (agendamento != null)
            {
                return Ok(agendamento);
            }
            return NotFound();
        }

        [Authorize]
        [HttpGet("funcionario")]
        public async Task<IActionResult> ObterAgendamentoFuncionario([FromHeader] string authorizationMS)
        {
            var claimIdentity = User.Identity as ClaimsIdentity;
            var emailFuncionario = claimIdentity.FindFirst("preferred_username").Value;

            var funcionario = await _funcionarioRepository.ObterFuncionarioPorEmail(emailFuncionario);
            if (funcionario == null)
            {
                var infomacoesUsuario = await _graphApi.ObterInformacoesUsuario(authorizationMS);
                funcionario = new Funcionario(infomacoesUsuario.DisplayName, infomacoesUsuario.UserPrincipalName, infomacoesUsuario.Id);

                await _funcionarioRepository.AdicionarFuncionario(funcionario);
            }

            var resultado = await _agendamentoRepository.ObterAgendamentosFuncionario(funcionario.Id);

            return Ok(resultado.Select(x => new AgendamentoDto()
            {
                Id = x.Id,
                Data = x.Data.Date.ToString("dd-MM-yyyy"),
                HoraInicial = x.HoraInicial.ToString("HH:ss"),
                HoraFinal = x.HoraFinal.ToString("HH:ss"),
                NomeFuncionario = funcionario.NomeCompleto
            }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletarAgendamento([FromRoute] int id,
            [FromServices] IAgendamentoRepository agendamentoRepository)
        {
            var agendamentoRemovido = await agendamentoRepository.RemoverAgendamento(id);
            if(agendamentoRemovido)
            {
                return Ok();
            }
            return NotFound();
        }

        [HttpPut]
        public async Task<IActionResult> AlterarAgendamento([FromBody] Agendamento agendamento)
        {
            var alterarAgendamento = await _agendamentoRepository.AlterarDados(agendamento);
            if (alterarAgendamento)
            {
                return Ok();
            }
            return NotFound();
        }
    }
}

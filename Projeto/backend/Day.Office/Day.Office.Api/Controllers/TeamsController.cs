using Day.Office.Api.Clients;
using Day.Office.Api.Data.Repositories;
using Day.Office.Api.Dtos;
using Day.Office.Api.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Day.Office.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {

        private readonly IGraphApi _graphApi;
        private readonly IFuncionarioRepository _funcionarioRepository;

        public TeamsController(IGraphApi graphApi, IFuncionarioRepository funcionarioRepository)
        {
            _graphApi = graphApi;
            _funcionarioRepository = funcionarioRepository;
        }

        [Authorize]
        [HttpGet("calendario")]
        public async Task<IActionResult> ObterAgendaTeams([FromHeader] string authorizationMS)
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
            var eventos = await _graphApi.ObterEventos(authorizationMS);

            if (eventos.Value.Any())
            {                
                return Ok(eventos.Value.Select(x => new AgendamentoTeamsDto()
                {
                    Id = x.Id,
                    Data = TimeZoneInfo.ConvertTime(
                        x.Start.DateTime,
                        TimeZoneInfo.FindSystemTimeZoneById(x.Start.TimeZone),
                        TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time")).Date.ToString("dd-MM-yyyy"),
                    HoraInicial= TimeZoneInfo.ConvertTime(
                        x.Start.DateTime,
                        TimeZoneInfo.FindSystemTimeZoneById(x.Start.TimeZone),
                        TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time")).ToString("HH:ss"),
                    HoraFinal = TimeZoneInfo.ConvertTime(
                        x.End.DateTime,
                        TimeZoneInfo.FindSystemTimeZoneById(x.End.TimeZone),
                        TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time")).ToString("HH:ss"),
                    NomeFuncionario = funcionario.NomeCompleto,
                    Local = x.Location.DisplayName
                }));
            }
            return Ok(new List<AgendamentoTeamsDto>());
        }
    }
}

using Day.Office.Api.Data.Repositories;
using Day.Office.Api.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Day.Office.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AgendamentoController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> CadastrarAgendamento([FromBody] Agendamento agendamento,
            [FromServices] IAgendamentoRepository agendamentoRepository)
        {
            var resultado = await agendamentoRepository.AdicionarAgendamento(agendamento);
            if (resultado)
            {
                return Ok(agendamento);
            }
            return BadRequest();
        }
        [HttpGet]
        public async Task<IActionResult> ListarAgendamentos([FromServices] IAgendamentoRepository agendamentoRepository)
        {
            var agendamentos = await agendamentoRepository.ObterAgendamentos();

            return Ok(agendamentos);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> ObterAgendamento([FromRoute] int id,
            [FromServices] IAgendamentoRepository agendamentoRepository)
        {
            var agendamento = await agendamentoRepository.ObterAgendamento(id);
            if (agendamento != null)
            {
                return Ok(agendamento);
            }
            return NotFound();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletarAgenda([FromRoute] int id,
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
        public async Task<IActionResult> AlterarAgendamento([FromBody] Agendamento agendamento
            ,[FromServices] IAgendamentoRepository agendamentoRepository)
        {
            var alterarAgendamento = await agendamentoRepository.AlterarDados(agendamento);
            if (alterarAgendamento)
            {
                return Ok();
            }
            return NotFound();
        }
    }
}

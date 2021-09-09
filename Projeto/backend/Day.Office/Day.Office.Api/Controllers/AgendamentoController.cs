using Day.Office.Api.Data.Repositories;
using Day.Office.Api.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Day.Office.Api.Controllers
{
    [ApiController]
    [Route("controller")]
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
    }
}

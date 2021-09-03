using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using React.WebApi.PoC.Data.Repositories;
using React.WebApi.PoC.Entitites;
using System.Threading.Tasks;

namespace React.WebApi.PoC.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FuncionarioController : ControllerBase
    {

        private readonly ILogger<FuncionarioController> _logger;

        public FuncionarioController(ILogger<FuncionarioController> logger)
        {
            _logger = logger;
        }
        [HttpPost]
        public async Task<IActionResult> CadastrarFuncionario([FromBody] Funcionario funcionario,
            [FromServices] IFuncionarioRepository funcionarioRepository)
        {
            var resultado = await funcionarioRepository.AdicionarFuncionario(funcionario);
            if (resultado)
            {
                return Ok(funcionario);
            }
            return BadRequest();
        }
        [HttpGet]
        public async Task<IActionResult> ListarFuncionarios([FromServices] IFuncionarioRepository funcionarioRepository)
        {
            var funcionarios = await funcionarioRepository.ObterFuncionarios();

            return Ok(funcionarios);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> ObterFuncionario([FromRoute] int id,
            [FromServices] IFuncionarioRepository funcionarioRepository)
        {
            var funcionario = await funcionarioRepository.ObterFuncionario(id);
            if (funcionario != null)
            {
                return Ok(funcionario);
            }
            return NotFound();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoverFuncionario([FromRoute] int id,         
            [FromServices] IFuncionarioRepository funcionarioRepository)
        {
            var deletarFuncionario = await funcionarioRepository.RemoverFuncionario(id);
            if (deletarFuncionario)
            {
                return Ok();
            }
            return NotFound();
        }
        [HttpPut]
        public async Task<IActionResult> AlterarFuncionario([FromBody] Funcionario funcionario,
            [FromServices] IFuncionarioRepository funcionarioRepository)
        {
            var alterarFuncionario = await funcionarioRepository.AlterarFuncionario(funcionario);
            if (alterarFuncionario)
            {
                return Ok();
            }
            return NotFound();
        }
    }
}

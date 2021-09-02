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
        public async Task<IActionResult> CadastrarFuncionario([FromBody]Funcionario funcionario, 
            [FromServices]IFuncionarioRepository funcionarioRepository)
        {
            var resultado = await funcionarioRepository.AdicionarFuncionario(funcionario);
            if (resultado)
            {
                return Ok(funcionario);
            }
            return BadRequest();
        }
        [HttpGet]
        public async Task<IActionResult> ListarFuncionarios([FromServices]IFuncionarioRepository funcionarioRepository)
        {
            var funcionarios = await funcionarioRepository.ObterFuncionarios();

            return Ok(funcionarios);
        }
    }
}

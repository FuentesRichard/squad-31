using Day.Office.Api.Data.Repositories;
using Day.Office.Api.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Day.Office.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EscritorioController : ControllerBase
    {
        private readonly IEscritorioRepository _escritorioRepository;

        public EscritorioController(IEscritorioRepository escritorioRepository)
        {
            _escritorioRepository = escritorioRepository;
        }
        [HttpGet]
        public async Task<IEnumerable<Escritorio>> ObterEscritorios()
        {
            return await _escritorioRepository.ObterEscritorios();
        }
    }
}

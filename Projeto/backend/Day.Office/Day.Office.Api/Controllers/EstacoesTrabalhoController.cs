using Day.Office.Api.Data.Repositories;
using Day.Office.Api.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day.Office.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class EstacoesTrabalhoController : ControllerBase
    {
        private readonly IEstacaoTrabalhoRepository _estacaoTrabalhoRepository;
        private readonly IAgendamentoRepository _agendamentoRepository;

        public EstacoesTrabalhoController(IEstacaoTrabalhoRepository estacaoTrabalhoRepository, IAgendamentoRepository agendamentoRepository)
        {
            _estacaoTrabalhoRepository = estacaoTrabalhoRepository;
            _agendamentoRepository = agendamentoRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<EstacaoTrabalhoDTO>> ObterEstacoesTrabalho([FromQuery] int idEscritorio, DateTime checkIn, DateTime checkOut)
        {
            var estacoesTrabalho = await _estacaoTrabalhoRepository.ObterEstacoesTrabalho(idEscritorio);
            var agendamentos = await _agendamentoRepository.ObterAgendamentos(idEscritorio, checkIn.Date, checkIn, checkOut);

            var estacoesOcupadas = agendamentos.Select(x => x.EstacaoTrabalho.Id);

            var resultado = new List<EstacaoTrabalhoDTO>();
            foreach (var item in estacoesTrabalho)
            {
                if (estacoesOcupadas.Contains(item.Id))
                {
                    resultado.Add(new EstacaoTrabalhoDTO(item.Id, item.Estacao, false));
                }
                else
                {
                    resultado.Add(new EstacaoTrabalhoDTO(item.Id, item.Estacao, true));
                }
            }

            return resultado.OrderBy(x => x.NumeroLugar);
        }
    }
}

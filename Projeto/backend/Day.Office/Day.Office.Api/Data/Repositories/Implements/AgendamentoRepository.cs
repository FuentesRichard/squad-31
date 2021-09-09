using Day.Office.Api.Data.Context;
using Day.Office.Api.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day.Office.Api.Data.Repositories.Implements
{
    public class AgendamentoRepository : IAgendamentoRepository
    {
        private readonly DataContext DataContext;

        public AgendamentoRepository(DataContext dataContext)
        {
            DataContext = dataContext;
        }

        public async Task<bool> AdicionarAgendamento(Agendamento agendamento)
        {
            DataContext.Agendamento.Add(agendamento);
            var resultado = await DataContext.SaveChangesAsync();

            return resultado > 0;
        }
        public async Task<List<Agendamento>> ObterAgendamentos()
        {
            return await DataContext.Agendamento.ToListAsync();
        }
        public async Task<Agendamento> ObterAgendamento(int id)
        {
            var agendamento = await DataContext.Agendamento.Where(x => x.Id == id).FirstOrDefaultAsync();
            return agendamento;
        }
        public async Task<bool> RemoverAgendamento(int id)
        {
            var agendamento = await ObterAgendamento(id);
            if (agendamento == null)
            {
                return false;
            }
            DataContext.Agendamento.Remove(agendamento);
            return await DataContext.SaveChangesAsync() > 0;
        } 
        public async Task<bool> AlterarDados(Agendamento agendamentoAlterado)
        {
            var agendamento = await ObterAgendamento(agendamentoAlterado.Id);
            if(agendamento == null)
            {
                return false;
            }
            agendamento.Data = agendamentoAlterado.Data;
            agendamento.HoraInicial = agendamentoAlterado.HoraInicial;
            agendamento.HoraFinal = agendamentoAlterado.HoraFinal;
            DataContext.Update(agendamento);
            return await DataContext.SaveChangesAsync() > 0;
        }
    }
}

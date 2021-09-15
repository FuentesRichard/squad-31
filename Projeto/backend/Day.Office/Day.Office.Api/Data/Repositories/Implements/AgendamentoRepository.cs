using Day.Office.Api.Data.Context;
using Day.Office.Api.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day.Office.Api.Data.Repositories.Implements
{
    public class AgendamentoRepository : IAgendamentoRepository
    {
        private readonly DataContext context;

        public AgendamentoRepository(DataContext context)
        {
            this.context = context;
        }

        public async Task<bool> AdicionarAgendamento(Agendamento agendamento)
        {
            context.Agendamento.Add(agendamento);
            var resultado = await context.SaveChangesAsync();

            return resultado > 0;
        }
        public async Task<List<Agendamento>> ObterAgendamentos()
        {
            return await context.Agendamento.ToListAsync();
        }
        public async Task<Agendamento> ObterAgendamento(int id)
        {
            var agendamento = await context.Agendamento.Where(x => x.Id == id).FirstOrDefaultAsync();
            return agendamento;
        }
        public async Task<bool> RemoverAgendamento(int id)
        {
            var agendamento = await ObterAgendamento(id);
            if (agendamento == null)
            {
                return false;
            }
            context.Agendamento.Remove(agendamento);
            return await context.SaveChangesAsync() > 0;
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
            context.Update(agendamento);
            return await context.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<Agendamento>> ObterAgendamentos(int idEscritorio, DateTime data, DateTime checkIn, DateTime checkOut)
        {
            return await context.Agendamento.Include(x => x.EstacaoTrabalho)
                .Where(x => x.EstacaoTrabalho.IdEscritorio == idEscritorio &&
                x.Data == data &&
                (x.HoraInicial >= checkIn && x.HoraFinal <= checkOut)).ToListAsync();
        }

        public async Task<IEnumerable<Agendamento>> ObterAgendamentosFuncionario(int idFuncionario)
        {
            return await context.Agendamento.Where(x => x.IdFuncionario == idFuncionario).ToListAsync();
        }
    }
}

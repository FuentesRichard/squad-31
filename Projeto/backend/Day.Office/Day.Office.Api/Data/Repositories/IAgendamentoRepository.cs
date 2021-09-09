using Day.Office.Api.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Day.Office.Api.Data.Repositories
{
    public interface IAgendamentoRepository
    {
        Task<bool> AdicionarAgendamento(Agendamento agendamento);
        Task<List<Agendamento>> ObterAgendamentos();
        Task<Agendamento> ObterAgendamento(int id);
        Task<bool> RemoverAgendamento(int id);
        Task<bool> AlterarDados(Agendamento agendamento);
    }
}

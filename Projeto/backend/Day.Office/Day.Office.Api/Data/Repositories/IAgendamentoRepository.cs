using Day.Office.Api.Data.Migrations;
using System.Threading.Tasks;

namespace Day.Office.Api.Data.Repositories
{
    public interface IAgendamentoRepository
    {
        Task<bool> AdicionarAgendamento(Agendamento agendamento);
    }
}

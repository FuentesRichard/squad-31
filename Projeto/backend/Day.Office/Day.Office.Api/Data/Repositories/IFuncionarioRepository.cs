using Day.Office.Api.Entities;
using System.Threading.Tasks;

namespace Day.Office.Api.Data.Repositories
{
    public interface IFuncionarioRepository
    {
        Task<Funcionario> ObterFuncionarioPorEmail(string email);
        Task<bool> AdicionarFuncionario(Funcionario funcionario);
    }
}

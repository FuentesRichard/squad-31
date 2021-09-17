using React.WebApi.PoC.Entitites;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace React.WebApi.PoC.Data.Repositories
{
    public interface IFuncionarioRepository 
    {
        Task<bool> AdicionarFuncionario(Funcionario funcionario);
        Task<List<Funcionario>> ObterFuncionarios();
        Task<Funcionario> ObterFuncionario(int id);
        Task<bool> RemoverFuncionario(int id);
        Task<bool> AlterarFuncionario(Funcionario funcionario);
    }
}

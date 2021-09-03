using Microsoft.EntityFrameworkCore;
using React.WebApi.PoC.Entitites;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.WebApi.PoC.Data.Repositories.Implements
{
    public class FuncionarioRepository : IFuncionarioRepository
    {
        private readonly DataContext DataContext;

        public FuncionarioRepository(DataContext dataContext)
        {
            DataContext = dataContext;
        }

        public async Task<bool> AdicionarFuncionario(Funcionario funcionario)
        {
            DataContext.Funcionarios.Add(funcionario);
            //SaveChanges retorna as mudanças
            var resultado = await DataContext.SaveChangesAsync();

            return resultado > 0;
        }

        public async Task<Funcionario> ObterFuncionario(int id)
        {
            var funcionario = await DataContext.Funcionarios.Where(x => x.Id == id).FirstOrDefaultAsync();
            return funcionario;
        }

        public async Task<List<Funcionario>> ObterFuncionarios()
        {
            return await DataContext.Funcionarios.ToListAsync();
        }

        public async Task<bool> RemoverFuncionario(int id)
        {
            var funcionario = await ObterFuncionario(id);
            if (funcionario == null)
            {
                return false;
            }
            DataContext.Funcionarios.Remove(funcionario);
            return await DataContext.SaveChangesAsync() > 0;
        }
        public async Task<bool> AlterarFuncionario(Funcionario funcionarioAlterado)
        {
            var funcionario = await ObterFuncionario(funcionarioAlterado.Id);
            if (funcionario == null)
            {
                return false;
            }
            funcionario.Nome = funcionarioAlterado.Nome;
            funcionario.Email = funcionarioAlterado.Email;
            funcionario.Senha = funcionarioAlterado.Senha;
            DataContext.Update(funcionario);
            return await DataContext.SaveChangesAsync() > 0;
        }
    }
}

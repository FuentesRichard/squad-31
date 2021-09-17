using Microsoft.EntityFrameworkCore;
using React.WebApi.PoC.Entitites;
using System.Collections.Generic;
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
            var funcionarios = await DataContext.Funcionarios.ToListAsync();
            foreach(var item in funcionarios)
            {
                if (item.Id == id)
                {
                    return item;
                }
            }
            return null;
        }

        public async Task<List<Funcionario>> ObterFuncionarios()
        {
            return await DataContext.Funcionarios.ToListAsync();
        }

        public async Task<bool> RemoverFuncionario(int id)
        {
            var funcionarios = await DataContext.Funcionarios.ToListAsync();
            foreach(var item in funcionarios)
            {
                if (item.Id == id)
                {
                    DataContext.Funcionarios.Remove(item);
                    var alteracao = await DataContext.SaveChangesAsync();
                    return alteracao > 0;
                }
            }
            return false;
        }
        public async Task<bool> AlterarFuncionario(Funcionario funcionario)
        {
            var funcionarios = await DataContext.Funcionarios.ToListAsync();
            foreach(var item in funcionarios)
            {
                if(item.Id == funcionario.Id)
                {
                    item.Nome = funcionario.Nome;
                    item.Email = funcionario.Email;
                    item.Senha = funcionario.Senha;
                    DataContext.Funcionarios.Update(item);
                    var alteracao = await DataContext.SaveChangesAsync();
                    return alteracao > 0;
                }
            }
            return false;
        }
    }
}

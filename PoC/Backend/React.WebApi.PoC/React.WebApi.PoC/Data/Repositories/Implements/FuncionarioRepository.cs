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

            var resultado = await DataContext.SaveChangesAsync();

            return resultado > 0;
        }
        public async Task<List<Funcionario>> ObterFuncionarios()
        {
            return await DataContext.Funcionarios.ToListAsync();
        }
    }
}

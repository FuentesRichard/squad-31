using Day.Office.Api.Data.Context;
using Day.Office.Api.Entities;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace Day.Office.Api.Data.Repositories.Implements
{
    public class FuncionarioRepository : IFuncionarioRepository
    {
        private readonly DataContext context;

        public FuncionarioRepository(DataContext context)
        {
            this.context = context;
        }

        public async Task<Funcionario> ObterFuncionarioPorEmail(string email)
        {
            return await context.Funcionario.Where(x => x.Email == email).FirstOrDefaultAsync();
        }
        public async Task<bool> AdicionarFuncionario(Funcionario funcionario)
        {
            context.Funcionario.Add(funcionario);
            var resultado = await context.SaveChangesAsync();

            return resultado > 0;
        }
    }
}

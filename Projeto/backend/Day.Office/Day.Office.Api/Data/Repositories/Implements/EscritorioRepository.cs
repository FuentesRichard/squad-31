using Day.Office.Api.Data.Context;
using Day.Office.Api.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day.Office.Api.Data.Repositories.Implements
{
    public class EscritorioRepository : IEscritorioRepository
    {
        private readonly DataContext context;
        public EscritorioRepository(DataContext context)
        {
            this.context = context;
        }

        public async Task<Escritorio> ObterEscritorioPorId(int id)
        {
            return await context.Escritorio.Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Escritorio>> ObterEscritorios()
        {
            return await context.Escritorio.ToListAsync();
        }
    }
}

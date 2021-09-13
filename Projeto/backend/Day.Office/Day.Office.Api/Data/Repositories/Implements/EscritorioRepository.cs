using Day.Office.Api.Data.Context;
using Day.Office.Api.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
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
        public async Task<IEnumerable<Escritorio>> ObterEscritorios()
        {
            return await context.Escritorio.ToListAsync();
        }
    }
}

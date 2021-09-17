using Day.Office.Api.Data.Context;
using Day.Office.Api.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day.Office.Api.Data.Repositories.Implements
{
    public class EstacaoTrabalhoRepository : IEstacaoTrabalhoRepository
    {
        private readonly DataContext context;

        public EstacaoTrabalhoRepository(DataContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<EstacaoTrabalho>> ObterEstacoesTrabalho(int idEscritorio)
        {
            return await context.EstacaoTrabalho.Where(x => x.IdEscritorio == idEscritorio).ToListAsync();
        }
    }
}

using Day.Office.Api.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Day.Office.Api.Data.Repositories
{
    public interface IEscritorioRepository
    {
        Task<Escritorio> ObterEscritorioPorId(int id);
        Task<IEnumerable<Escritorio>> ObterEscritorios();
    }
}

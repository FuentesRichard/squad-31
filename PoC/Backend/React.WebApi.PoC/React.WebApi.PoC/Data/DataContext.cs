using Microsoft.EntityFrameworkCore;
using React.WebApi.PoC.Entitites;

namespace React.WebApi.PoC.Data
{
    //DataContext é o intermediario entre o DB e as entidades(classes)
    public class DataContext : DbContext
    {
        //Delegando a configuração pro ORM(Object Relation Mapping)
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Funcionario> Funcionarios { get; set; }

    }
}

using Day.Office.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace Day.Office.Api.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opts) : base(opts) { }
        public DbSet<Agendamento> Agendamento { get; set; }
        public DbSet<Funcionario> Funcionario { get; set; }
        public DbSet<Escritorio> Escritorio { get; set; }
        public DbSet<EstacaoTrabalho> EstacaoTrabalho { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(DataContext).Assembly);
            base.OnModelCreating(modelBuilder);
        }
    }
}

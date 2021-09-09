using Day.Office.Api.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Day.Office.Api.Data.Mappings
{
    public class AgendamentoMap : IEntityTypeConfiguration<Agendamento>
    {
        public void Configure(EntityTypeBuilder<Agendamento> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Data).IsRequired();
            builder.Property(x => x.HoraInicial).IsRequired();
            builder.Property(x => x.HoraFinal).IsRequired();
            builder.HasOne(x => x.Funcionario)
                .WithMany(x => x.Agendamentos)
                .HasForeignKey(x => x.IdFuncionario);
            builder.HasOne(x => x.EstacaoTrabalho)
                .WithMany(x => x.Agendamentos)
                .HasForeignKey(x => x.IdEstacaoTrabalho);
        }
    }
}

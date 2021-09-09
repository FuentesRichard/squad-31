using Day.Office.Api.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Day.Office.Api.Data.Mappings
{
    public class EscritorioMap : IEntityTypeConfiguration<Escritorio>
    {
        public void Configure(EntityTypeBuilder<Escritorio> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Estado).HasMaxLength(2).IsRequired();
            builder.Property(x => x.Cidade).HasMaxLength(10).IsRequired();
            builder.Property(x => x.EstacoesDeTrabalho).IsRequired();

            builder.HasData(new Escritorio(1, "SP", "São Paulo", 600), new Escritorio(2, "SP", "Santos", 100));
        }
    }
}

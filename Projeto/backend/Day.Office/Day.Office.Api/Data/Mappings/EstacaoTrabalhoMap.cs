using Day.Office.Api.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace Day.Office.Api.Data.Mappings
{
    public class EstacaoTrabalhoMap : IEntityTypeConfiguration<EstacaoTrabalho>
    {
        public void Configure(EntityTypeBuilder<EstacaoTrabalho> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Estacao).IsRequired();
            builder.HasOne(x => x.Escritorio)
                .WithMany(x => x.EstacoesTrabalho)
                .HasForeignKey(x => x.IdEscritorio);

            var estacoes = new List<EstacaoTrabalho>();
            int n = 1;
            for (int i = 1; i <= 240; i++)
            {
                estacoes.Add(new EstacaoTrabalho(i, n, 1));              
                n = n + 2;
            }
            n = 1;
            for (int i = 241; i <=280 ; i++)
            {
                estacoes.Add(new EstacaoTrabalho(i, n, 2));
                n = n + 2;
            }
            builder.HasData(estacoes);
        }
    }
}

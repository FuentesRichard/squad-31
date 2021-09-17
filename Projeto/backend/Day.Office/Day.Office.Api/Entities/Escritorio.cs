using System.Collections;
using System.Collections.Generic;

namespace Day.Office.Api.Entities
{
    public class Escritorio
    {
        public Escritorio()
        {

        }

        public Escritorio(int id, string estado, string cidade, int estacoesDeTrabalho)
        {
            Id = id;
            Estado = estado;
            Cidade = cidade;
            EstacoesDeTrabalho = estacoesDeTrabalho;
        }

        public int Id { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; } 
        public int EstacoesDeTrabalho { get; set; }

        public ICollection<EstacaoTrabalho> EstacoesTrabalho { get; set; }
    }
}

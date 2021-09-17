using System.Collections.Generic;

namespace Day.Office.Api.Entities
{
    public class EstacaoTrabalho
    {
        public EstacaoTrabalho()
        {

        }

        public EstacaoTrabalho(int id, int estacao, int idEscritorio)
        {
            Id = id;
            Estacao = estacao;
            IdEscritorio = idEscritorio;
        }

        public int Id { get; set; }
        public int Estacao { get; set; }
        public int IdEscritorio { get; set; }
        
        public Escritorio Escritorio { get; set; }

        public ICollection<Agendamento> Agendamentos { get; set; }
    }
}

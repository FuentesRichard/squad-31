using System.Collections.Generic;

namespace Day.Office.Api.Entities
{
    public class Funcionario
    {
        public Funcionario()
        {

        }

        public Funcionario(int id, string nomeCompleto, string email, string idExterno)
        {
            Id = id;
            NomeCompleto = nomeCompleto;
            Email = email;
            IdExterno = idExterno;
        }

        public int Id { get; set; }
        public string NomeCompleto { get; set; }
        public string Email { get; set; }
        public string IdExterno { get; set; }

        public ICollection<Agendamento> Agendamentos { get; set; }
    }
}

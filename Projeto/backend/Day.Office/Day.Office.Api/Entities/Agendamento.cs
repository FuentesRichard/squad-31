using System;

namespace Day.Office.Api.Entities
{
    public class Agendamento
    {
        public Agendamento()
        {

        }
        public Agendamento(DateTime data, DateTime horaInicial, DateTime horaFinal, int idFuncionario, int idEstacaoTrabalho)
        {            
            Data = data;
            HoraInicial = horaInicial;
            HoraFinal = horaFinal;
            IdFuncionario = idFuncionario;
            IdEstacaoTrabalho = idEstacaoTrabalho;
        }
        public Agendamento(int id, DateTime data, DateTime horaInicial, DateTime horaFinal, int idFuncionario, int idEstacaoTrabalho)
        {
            Id = id;
            Data = data;
            HoraInicial = horaInicial;
            HoraFinal = horaFinal;
            IdFuncionario = idFuncionario;
            IdEstacaoTrabalho = idEstacaoTrabalho;
        }

        public int Id { get; set; }
        public DateTime Data { get; set; }
        public DateTime HoraInicial { get; set; }
        public DateTime HoraFinal { get; set; }
        public int IdFuncionario { get; set; }
        public int IdEstacaoTrabalho { get; set; }
        public string ExternalId { get; set; }

        public EstacaoTrabalho EstacaoTrabalho { get; set; }
        public Funcionario Funcionario { get; set; }
    }
}

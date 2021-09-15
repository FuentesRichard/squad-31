using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day.Office.Api.Dtos
{
    public class AlterarAgendamentoRequest
    {
        public string MicrosoftJwt { get; set; }
        public DateTime Data { get; set; }
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }
        public int IdEscritório { get; set; }
        public int IdEstacaoTrabalho { get; set; }
        public int IdAgendamento { get; set; }
    }
}

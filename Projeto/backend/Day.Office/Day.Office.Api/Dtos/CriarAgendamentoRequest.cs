using System;

namespace Day.Office.Api.Dtos
{
    public class CriarAgendamentoRequest
    {
        public string MicrosoftJwt { get; set; }
        public DateTime Data { get; set; }
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }
        public int IdEscritorio { get; set; }
        public int IdEstacaoTrabalho { get; set; }
    }
}

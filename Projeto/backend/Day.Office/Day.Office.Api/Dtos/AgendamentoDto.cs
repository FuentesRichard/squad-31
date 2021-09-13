namespace Day.Office.Api.Dtos
{
    public class AgendamentoDto
    {
        public int Id { get; set; }
        public string Data { get; set; }
        public string HoraInicial { get; set; }
        public string HoraFinal { get; set; }
        public string NomeFuncionario { get; set; }        
    }
}

namespace Day.Office.Api.Dtos
{
    public class EstacaoTrabalhoDTO
    {
        public EstacaoTrabalhoDTO(int id, int numeroLugar, bool disponivel)
        {
            Id = id;
            NumeroLugar = numeroLugar;
            Disponivel = disponivel;
        }
        public int Id { get; set; }
        public int NumeroLugar { get; set; }
        public bool Disponivel { get; set; }
    }
}

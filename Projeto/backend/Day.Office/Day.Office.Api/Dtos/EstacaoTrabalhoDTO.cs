namespace Day.Office.Api.Dtos
{
    public class EstacaoTrabalhoDTO
    {
        public EstacaoTrabalhoDTO(int numeroLugar, bool disponivel)
        {
            NumeroLugar = numeroLugar;
            Disponivel = disponivel;
        }

        public int NumeroLugar { get; set; }
        public bool Disponivel { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace React.WebApi.PoC.Entitites
{
    //Atributo que informa que se a classe for usada pra uma tabela, ela deve ser chamada funcionario
    [Table("funcionario")] 
    public class Funcionario
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}

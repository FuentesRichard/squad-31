import React from "react";

function Cadastro() {
   return (
      <form>
         
         <label for="email">Email</label>
         <input id="email" type="email" />

         <label for="senha">Senha</label>
         <input id="senha" type="password" />

         <h2>Informações Pessoais</h2>

         <label for="nome">Nome</label>
         <input id="nome" type="text" />

         <label for="sobrenome">Sobrenome</label>
         <input id="sobrenome" type="text" />

         <label for="masculino">Masculino</label>
         <input name="genero" id="masculino" type="radio" />
         <label for="feminino">Feminino</label>
         <input name="genero" id="feminino" type="radio" />
         <label for="outro">Outro</label>
         <input name="genero" id="outro" type="radio" />
      </form>
   );
}

export default Cadastro;

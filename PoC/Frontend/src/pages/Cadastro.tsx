import React from "react";
import '../styles/Cadastro.scss'

export function Cadastro() {
   return (
      <div id="page-cadastro">
         <form>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />

            <label htmlFor="senha">Senha</label>
            <input id="senha" type="password" />
            
            <label htmlFor="senha">Confirmar senha</label>
            <input id="senha" type="password" />

            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" />

            <label htmlFor="sobrenome">Sobrenome</label>
            <input id="sobrenome" type="text" />

            <div>
               <div id="input">
                  <input name="genero" id="masculino" type="radio" />
                  <input name="genero" id="feminino" type="radio" />
                  <input name="genero" id="outro" type="radio" />
               </div>

               <div id="label">
                  <label htmlFor="masculino">Masculino</label>
                  <label htmlFor="feminino">Feminino</label>
                  <label htmlFor="outro">Outro</label>
               </div>

            </div>

         </form>
      </div>
   );
}

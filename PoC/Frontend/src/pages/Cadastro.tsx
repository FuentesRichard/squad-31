import React from "react";
import '../styles/Cadastro.scss'

export function Cadastro() {
   return (
      <div id="page-cadastro">
         <form>
            <label htmlFor="email">Email</label>
            <input className="inputs" id="email" type="email" />

            <label htmlFor="senha">Senha</label>
            <input className="inputs" id="senha" type="password" />
            
            <label htmlFor="senha">Confirmar senha</label>
            <input className="inputs" id="senha" type="password" />

            <label htmlFor="nome">Nome</label>
            <input className="inputs" id="nome" type="text" />

            <label htmlFor="sobrenome">Sobrenome</label>
            <input className="inputs" id="sobrenome" type="text" />

            <div>
               <label htmlFor="genero">Gênero</label>
               <div id="input-radio">
                  <input name="genero" id="masculino" type="radio" />
                  <input name="genero" id="feminino" type="radio" />
                  <input name="genero" id="outro" type="radio" />
               </div>

               <div id="label-radio">
                  <label htmlFor="masculino">Masculino</label>
                  <label htmlFor="feminino">Feminino</label>
                  <label htmlFor="outro">Outro</label>
               </div>
            </div>
            <button type="submit">Confirmar</button>
         </form>
      </div>
   );
}

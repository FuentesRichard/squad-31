import React from "react";
import styled from "styled-components";

const FormCadastro = styled.form`
   display: flex;
   flex-direction: column;
   
   div {
      display: flex;
   }
`;

const FlexContainerInput = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`;

const FlexContainerLabel = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 2px;
`;

function Cadastro() {
   return (
      <FormCadastro>

         <label for="email">Email</label>
         <input id="email" type="email" />

         <label for="senha">Senha</label>
         <input id="senha" type="password" />

         <label for="nome">Nome</label>
         <input id="nome" type="text" />

         <label for="sobrenome">Sobrenome</label>
         <input id="sobrenome" type="text" />

         <div>
            <FlexContainerInput>
               <input name="genero" id="masculino" type="radio" />
               <input name="genero" id="feminino" type="radio" />
               <input name="genero" id="outro" type="radio" />
            </FlexContainerInput>

            <FlexContainerLabel>
               <label for="masculino">Masculino</label>
               <label for="feminino">Feminino</label>
               <label for="outro">Outro</label>
            </FlexContainerLabel>

         </div>

      </FormCadastro>
   );
}

export default Cadastro;

import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Login";

const Cabecalho = styled.header`
   display: flex;

   ul {
      list-style: none;
   }
`;

export default function Home() {
   return (
      <Cabecalho>
         <GlobalStyle/>
         <img src=""></img>
         <nav>
            <ul>
               <li>Início</li>
               <li>Agendamento</li>
               <li>Conta</li>
               <li>Sair</li>
            </ul>
         </nav>
      </Cabecalho>
   );
}
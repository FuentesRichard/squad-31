import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Login";

const Cabecalho = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 74.67px;

   ul {
      list-style: none;
      display: flex;
   }

   li {
      margin-right: 49px;
   }
`;

export default function Home() {
   return (
      <Cabecalho>
         <GlobalStyle/>
         <img src=""></img>
         <nav>
            <ul>
               <li>
                  <a>Início</a>
               </li>
               <li>
                  <a>Agendamento</a>
               </li>
               <li>
                  <a>Conta</a>
               </li>
               <li>
                  <a>Sair</a>
               </li>
            </ul>
         </nav>
      </Cabecalho>
   );
}
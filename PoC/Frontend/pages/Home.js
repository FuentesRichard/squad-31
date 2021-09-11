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
      <>
         <Cabecalho>
            <GlobalStyle />
            <img src=""></img>
            <nav>
               <ul>
                  <li>
                     <a href="#">Início</a>
                  </li>
                  <li>
                     <a href="#">Agendamento</a>
                  </li>
                  <li>
                     <a href="#">Conta</a>
                  </li>
                  <li>
                     <a href="#">Sair</a>
                  </li>
               </ul>
            </nav>
         </Cabecalho>

         <main>
            <div>
               <h1>Meu Day Office</h1>
               <input type="text" placeholder="Pesquisar meus eventos" />
               <button>+ Criar</button>
            </div>

            <div>
               <h2>Eventos</h2>
               <h2>Histórico</h2>
            </div>

         </main>
      </>
   );
}
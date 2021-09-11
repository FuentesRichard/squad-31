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

const Main = styled.main`
   h1 {
      font-size: 48px;
      font-weight: 600;
   }

   input {
      width: 400px;
      height: 48px;
      border: 1.5px solid #AAAAAA;
      border-radius: 30px;
      padding-left: 36px;
      box-sizing: border-box;
   }

   h2 {
      font-size: 24px;
      display: inline;
      font-weight: 400;
   }

   h2:hover {
      border-bottom: 3px solid #000;
   }

   button {
      height: 48px;
      width: 105.16px;
      font-family: Roboto;  
      text-transform: uppercase;
      letter-spacing: 1.19px;
      border: none;
      border-radius: 50px;
      background-color: #979797;
      color: #fff;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
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

         <Main>
            <GlobalStyle />
            <div>
               <h1>Meu Day Office</h1>
               <input type="text" placeholder="Pesquisar meus eventos" />
               <button>+ Criar</button>
            </div>

            <div>
               <h2>Eventos</h2>
               <h2>Histórico</h2>
            </div>

         </Main>
      </>
   );
}
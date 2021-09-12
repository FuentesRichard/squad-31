import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Login";
import Link from "next/dist/client/link";

const Body = styled.div`
   height: 100vh;
   display: grid;
   grid-template-columns: 164px 1fr 164px;
   grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

   @media (max-width: 376px) {
      height: 165vh;
      grid-template-columns: 30px 1fr 30px;
   }
`;

const Cabecalho = styled.header`
   grid-column: 2/2;
   grid-row: 1/2;
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

   a {
      color: #000;
      font-size: 26px;
      font-weight: 600;
      text-decoration: none;
   }

   a:hover {
      border-bottom: 3px solid #000;
   }

   .ativo {
      border-bottom: 3px solid #000;
   }

   @media (max-width: 376px) {
      ul {
         display: none;
      }
   }
`;

const Main = styled.main`
   grid-column: 1/4;
   grid-row: 2/6;
   .container {
      padding: 0 164px;
   }

   .area1 {
      grid-column: 2/2;
      grid-row: 2/3;
   }

   .first-area{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 17px;
   }

   .title {
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

   input:focus {
      outline: 0;
   }

   .btn-section {
      font-size: 24px;
      display: inline;
      font-weight: 400;
      margin-right: 83px;
      background-color: #fff;
      border: none;
      border-bottom: 3px solid #fff;
      cursor: pointer;
   }

   .btn-section:hover {
      border-bottom: 3px solid #000;
   }

   .btn-criar {
      height: 48px;
      width: 105.16px;
      cursor: pointer;
      font-family: Roboto;
      font-size: 13.38px;  
      text-transform: uppercase;
      letter-spacing: 1.19px;
      border: none;
      border-radius: 50px;
      background-color: #979797;
      color: #fff;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
   }

   .btn-criar:hover {
      border: none;
   }

   .teams {
      width: 257px;
      height: 35px;
      background-color: #F2F0F0;
      color: #AAAAAA;
      border: 1.5px solid #AAAAAA;
      border-radius: 50px;
      font-size: 10.1182px;
      margin-left: 169px;
      cursor: pointer;
   }

   .content {
      margin-top: 21px;
      background-color: #F2F0F0;
   }

   .area2 {
      grid-column: 2/2;
      grid-row: 3/4;
   }

   .area3 {
      grid-column: 2/2;
      grid-row: 4/5;
   }

   .area4 {
      grid-column: 2/2;
      grid-row: 5/6;
   }
   `;

const Footer = styled.footer`
   grid-column: 1/4;
   grid-row: 6/7;
   background-color: #9A9696;
`;

export default function Home() {
   return (
      <Body>
         <Cabecalho>
            <GlobalStyle />
            <h1>LOGO</h1>
            <nav>
               <ul>
                  <li>
                     <Link href="./Home">
                        <a className="ativo">Início</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="#">
                        <a>Agendamento</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="#">
                        <a>Conta</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="#">
                        <a>Sair</a>
                     </Link>
                  </li>
               </ul>
            </nav>
         </Cabecalho>

         <Main>
            <GlobalStyle />
            <section className="container ">
               <div className="area1">
                  <div className="first-area">
                     <h1 className="title">Meu Day Office</h1>
                     <input type="text" placeholder="Pesquisar meus eventos" />
                     <button className="btn-criar">+ Criar</button>
                  </div>

                  <button className="btn-section">Eventos</button>
                  <button className="btn-section">Histórico</button>
               </div>


               <div className="content area2">
               </div>
            </section>

            <section>
               <div className="container area3">
                  <h2 className="title">Meu Teams</h2>
               </div>
               <div className="content area4">
                  <button className="teams">Sincronizar com o Microsoft Teams</button>
               </div>
            </section>
         </Main>

         <Footer>
            <h2>Logo</h2>
         </Footer>
      </Body>
   );
}
import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Login";
import Link from "next/dist/client/link";

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
`;

const Main = styled.main`
   .container {
      padding: 0 164px;
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
               <div className="first-area">
                  <h1 className="title">Meu Day Office</h1>
                  <input type="text" placeholder="Pesquisar meus eventos" />
                  <button className="btn-criar">+ Criar</button>
               </div>

               <button className="btn-section">Eventos</button>
               <button className="btn-section">Histórico</button>

               <div className="content">
               </div>
            </section>

            <section>
               <div className="container">
                  <h2 className="title">Meu Teams</h2>
               </div>
               <div className="content">
                  <button className="teams">Sincronizar com o Microsoft Teams</button>
               </div>
            </section>
         </Main>
      </>
   );
}
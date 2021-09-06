import React, { Component } from 'react';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --orange-first: #FE4400;
        --orange-second: #FC6027;
        --orange-third: #EF653C;
        --orange-fourth: #FE885C;
    
        --blue-first: #4B4FA1;
        --blue-second: #414099;
        --blue-third: #686DC4;
        --blue-fourth: #96B3F2;
    
        --black: #303033;
        --grey: #C1C1C1;
    
        --purple: #4A1A8C;
    
        --yellow: #FFC91D;
    }
  
    * {
    margin: 0px;
    padding: 0px;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Background = styled.div`
    background-color: var(--orange-fourth);
    height: 100vh;
    width: 100vw;
    margin: 0;
`;

const Extra = styled.div`
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 68vw;
    height: 100vh;

    @media (max-width: 700px){
        display: none;
    }
`;

const Principal = styled.main`
    heigth: 100vh

    h1 {
        font-weight: bold;
        font-size: 30px;
    }

    @media (max-width: 700px){
        width: 100vw;
    }
`;

const FormLogin = styled.div`
  div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center; /* align-items: flex-start; */
      margin: 100px 0px;
      min-height: 30vh;

      
  }

  input {
    border: 2px solid #AAA;
    border-radius: 6px;
    margin: 10px;
    width: 243px;
    height: 31px;
  }

  button {
      border-radius: 6px;
      height: 50px;
      width: 85px
  }
`;

const Rodape = styled.footer`

`;

function Login() {
    
    return (
            <Background>
                <GlobalStyle/>
                <Extra>
                    <header>
                        <h1>Logo</h1>
                    </header>

                    <div>
                        <p>Texto</p>
                    </div>
                </Extra>
                <Principal>
                    <h1>Logo</h1>
                    <FormLogin>
                        <div>
                            <label htmlFor="cpf">CPF</label>
                            <input id="cpf" type="text" placeholder="CPF"/>
                            <label htmlFor="senha">Senha</label>
                            <input id="senha" type="password" placeholder="Senha"/>
                            <button>Entrar</button>
                        </div>
                    </FormLogin>

                    <Rodape>
                        <Link href="/">
                            <a>Página Home</a>
                        </Link>
                    </Rodape>
                </Principal>
            </Background>
    )
}

export default Login
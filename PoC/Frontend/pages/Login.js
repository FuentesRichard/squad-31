import React, { Component } from 'react';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

const Esquerda = styled.div`
        float: left;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 68vw;
        height: 100vh;
`;

const Background = styled.div`
    background-color: #ffb833;
    height: 100vh;
    width: 100vw;
    margin: 0;
`;

const FormLogin = styled.div`
  div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
  }

  input {
    border: 2px solid #AAA;
    border-radius: 4px;
    width: 243px;
    height: 31px;
  }
`;

function Login() {
    
    return (
            <Background>
                <GlobalStyle/>
                <Esquerda>
                    <header>
                        <h1>Logo</h1>
                    </header>

                    <div>
                        <h1>Texto</h1>
                    </div>
                </Esquerda>
                <div>
                    <h1>Logo</h1>
                    <FormLogin>
                        <div>
                            <label for="cpf">CPF</label>
                            <input id="cpf" type="text" placeholder="CPF"/>
                            <label for="senha">Senha</label>
                            <input id="senha" type="password" placeholder="Senha"/>
                        </div>
                    </FormLogin>

                    <footer>
                        <Link href="/">
                        <a>Página Home</a>
                        </Link>
                    </footer>
                </div>
            </Background>
    )
}

export default Login
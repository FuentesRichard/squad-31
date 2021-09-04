import React, { Component } from 'react';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
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
                    <header>
                        <h1>Logo</h1>
                    </header>


                    <div>
                        <p>CPF</p>
                        <input type="text" placeholder="CPF"/>
                        <p>Senha</p>
                        <input type="password" placeholder="Senha"/>
                    </div>


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
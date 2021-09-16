import React, { useCallback } from 'react';
import { useAutenticacao } from '../../hooks/auth';
import Illustration from '../../assets/images/Illustration_1.svg';
import Logo_teams from '../../assets/images/Logo-microsoft_teams.svg'
import { Aside, Main, PageLogin } from './styles';

const SignIn : React.FC = () => {
    const {signIn} = useAutenticacao();
    const SignIn = useCallback(async ()=>{
        await signIn();
    },[signIn])
    return (
        <PageLogin>
            <Aside>
                <img id="illustration" src={Illustration} alt="Homem apoiado em uma ampulheta segurando um relógio na mão"/>
            </Aside>
            <Main>
                <h1>Bem-vinde!</h1>
                <div id="separator"></div>
                <p id="texto">O nosso Day Office possui integração com o sistema Microsoft Teams, então pedimos que realize o login através da sua conta na plataforma.</p>
                <button onClick={SignIn}> <img src={Logo_teams} alt="Logo Microsoft Teams" /> Entrar com Microsoft Teams</button>
                <p id="recuperarSenha">Esqueceu seu senha? <a href="#">Clique aqui</a></p> 
            </Main>
        </PageLogin>
    );
};

export default SignIn;
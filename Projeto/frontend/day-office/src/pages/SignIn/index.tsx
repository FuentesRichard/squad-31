import React, { useCallback } from 'react';
import Illustration from '../../assets/images/Illustration_1.svg';
import Logo_teams from '../../assets/images/Logo-microsoft_teams.svg'
import { Aside, Main, PageLogin } from './styles';
import { useMsal } from '@azure/msal-react';
import config from '../../config/msalConfig';
import { AccountInfo } from '@azure/msal-browser';
import apiConfig from '../../config/apiConfig';

const SignIn : React.FC = () => {
    const { instance, accounts} = useMsal();

    const getTokenRedirect = (async (account: AccountInfo) => {      
        return instance.acquireTokenSilent({scopes : apiConfig.scopes, account}).catch(error => {                      
           return instance.acquireTokenPopup({scopes : apiConfig.scopes, account});
        })});
    const passTokenToApi = (async (account : AccountInfo) : Promise<string> =>{
        const result = await getTokenRedirect(account)
            .then(response => {            
              return response.accessToken;            
            }).catch(error => {              
                console.error(error);
          });        
          return result ? result : '';
    });

    const SignIn = useCallback(async ()=>{
        instance.loginPopup(config.loginRequest).then(async (result) => {
            if(result.account){
                var tokenApi = await passTokenToApi(result.account);
                localStorage.setItem('@DayOffice:microsoftToken', result.accessToken);
                localStorage.setItem('@DayOffice:tokenApi', tokenApi);
            }
        }).catch(e => {
            console.log(e);
        });
    },[])
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
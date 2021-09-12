import React, { createContext, useCallback, useContext, useState } from 'react';
import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';
import config from '../config/msalConfig';
import apiConfig from '../config/apiConfig';

interface AuthState {
  tokenMicrosoft: string;
  tokenApi: string;
  user: string | undefined;
};

interface AuthContextData {
  user: AuthState;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
const msalIntance = new PublicClientApplication(config.msalConfig);

const AuthProvider: React.FC = ({ children }) => {  
  const [data, setData] = useState<AuthState>(() => {     
    const tokenMicrosoft = localStorage.getItem('@DayOffice:microsoftToken');
    const tokenApi = localStorage.getItem('@DayOffice:tokenApi');
    const user = localStorage.getItem('@DayOfficer:user');
    if (tokenMicrosoft && tokenApi && user) {
      return {user, tokenApi, tokenMicrosoft};
    }
    return {} as AuthState;
  });

  const getTokenMicrosoft = (async () => {
    return msalIntance.loginPopup(config.loginRequest);
  });

  const getTokenApi = (async ()=> {    
    const account = msalIntance.getAccountByUsername(data.user ? data.user : '');
    if (account) {
      return await msalIntance.acquireTokenSilent({account, scopes: apiConfig.scopes});      
    }
    return {} as AuthenticationResult;
  });

  const signIn = useCallback(async () => {
    debugger;
    var authResponse = await getTokenMicrosoft();
    setData({user : authResponse.account?.username} as AuthState);
    var tokenApi = await getTokenApi();
    var user = authResponse.account?.username;    

    localStorage.setItem('@DayOffice:microsoftToken', authResponse.accessToken);
    localStorage.setItem('@DayOffice:tokenApi', tokenApi.accessToken);
    localStorage.setItem('@DayOfficer:user', user ? user : '');

    setData({user, tokenApi : tokenApi.accessToken, tokenMicrosoft : authResponse.accessToken});
  }, []);

  const signOut = useCallback(() => {
    const logoutRequest = {
      account: msalIntance.getAccountByUsername(data.user ? data.user : '')
    };
    msalIntance.logoutPopup(logoutRequest);

    setData({} as AuthState);
  }, [data]);

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAutenticacao(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado no AuthProvider');
  }
  return context;
};

export { AuthProvider, useAutenticacao };
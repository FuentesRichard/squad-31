import React, { createContext, useCallback, useContext, useState } from 'react';
import { AccountInfo, PublicClientApplication } from '@azure/msal-browser';
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

  const signIn = useCallback(async () => {    
    var authResponse = await getTokenMicrosoft();    
    if (authResponse.account) {      
      const tokenApi = await passTokenToApi(authResponse.account);
      var user = authResponse.account?.username;    
  
      localStorage.setItem('@DayOffice:microsoftToken', authResponse.accessToken);
      localStorage.setItem('@DayOffice:tokenApi', tokenApi);
      localStorage.setItem('@DayOfficer:user', user ? user : '');
  
      setData({user, tokenApi, tokenMicrosoft : authResponse.accessToken});      
    }
  }, []); 
  
  const getTokenRedirect = (async (account: AccountInfo) => {      
    return msalIntance.acquireTokenSilent({scopes : apiConfig.scopes, account}).catch(error => {                      
       return msalIntance.acquireTokenPopup({scopes : apiConfig.scopes, account});
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

  const signOut = useCallback(() => {
    const logoutRequest = {
      account: msalIntance.getAccountByUsername(data.user ? data.user : '')
    };
    msalIntance.logoutPopup(logoutRequest);

    localStorage.removeItem('@DayOffice:microsoftToken');
    localStorage.removeItem('@DayOffice:tokenApi');
    localStorage.removeItem('@DayOfficer:user');

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
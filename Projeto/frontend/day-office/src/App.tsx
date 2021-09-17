import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import config from './config/msalConfig';

const App : React.FC = () => {
  const msalIntance = new PublicClientApplication(config.msalConfig);
  return (
    <Router>   
      <MsalProvider instance={msalIntance}>
        <Routes />
      </MsalProvider>
      <GlobalStyle/>
    </Router>
  );
}

export default App;

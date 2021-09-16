import { useMsal } from "@azure/msal-react";
import React, { useCallback } from "react";
import relogioSVG from '../../assets/images/Relogio.svg';
import { Header } from "./styles";

const HeaderDayOffice : React.FC = () => {
   const { instance } = useMsal();
   const handleLogout = useCallback(() => {      
      instance.logoutPopup({
         postLogoutRedirectUri: "/",
         mainWindowRedirectUri: "/"
      });    
      
      localStorage.removeItem('@DayOffice:microsoftToken');
      localStorage.removeItem('@DayOffice:tokenApi');
  },[instance]);
    
    return (
        <Header>
            <img src={relogioSVG}></img>
            <nav>
               <ul>
                  <li>
                     <a href="#">Início</a>
                  </li>
                  <li>
                     <a href="#">Agendamento</a>
                  </li>
                  <li>
                     <a href="#">Conta</a>
                  </li>
                  <li>
                     <a onClick={handleLogout}>Sair</a>
                  </li> 
               </ul>
            </nav>
         </Header>
    );
}

export default HeaderDayOffice;
import { useMsal } from "@azure/msal-react";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
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
         <img src={relogioSVG} alt="relogio"></img>
         <nav>
            <ul>
               <li>
                  <Link to="/home">Início</Link>
               </li>
               <li>
                  <Link to="/agendamento">Agendamento</Link>
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
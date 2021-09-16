import React from "react";
import relogioSVG from '../../assets/images/Relogio.svg';
import { Header } from "./styles";

const HeaderDayOffice : React.FC = () => {
    
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
                     <a href="#">Sair</a>
                  </li> 
               </ul>
            </nav>
         </Header>
    );
}

export default HeaderDayOffice;
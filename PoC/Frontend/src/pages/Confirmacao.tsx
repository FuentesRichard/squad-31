import "../styles/Confirmacao.scss";
import relogioSVG from "../images/Relogio.svg";
import Pessoa from '../images/Person(Confirmacao).svg';

export function Confirmacao() {
  return (
    <div id="page-confirmacao">
      <header>
            <img src={relogioSVG} alt="relogio"></img>
            <nav>
               <ul>
                  <li>
                     <a href="/home">Início</a>
                  </li>
                  <li>
                     <a href="/agendamento">Agendamento</a>
                  </li>
                  <li>
                     <a href="/">Sair</a>
                  </li>
               </ul>
            </nav>
         </header>
         <div id="mensagem">
            <img src={Pessoa} alt="Pessoa de mascara" />
            <p>Sua ida ao escritório foi agendada!</p>
         </div>
    </div>
  )
}
import "../styles/Confirmacao.scss";
import relogioSVG from "../images/Relogio.svg";
import Pessoa from '../images/Person(Confirmacao).svg';
import prevencaMed from '../images/Illustration_prevencao.svg'
import prevent from '../images/prevent.svg'

type event = {
   target: any
 }

function popup(event: event) {
   let fechar = document.getElementById('abrirModal');
   if (fechar) fechar.id = "fecharModal";
}

export function Confirmacao() {
  return (
    <div id="page-confirmacao">
      <div id="abrirModal" className="modal">
         <div>
            <h2>Medidas de prevenção ao COVID - 19</h2>
            <img id="medico" src={prevencaMed} alt="Médico de mascara se protegendo do vírus" />
            <img id="dicas" src={prevent} alt="Dicas de prevenção" />
            <button onClick={popup} title="Fechar" className="fechar">x</button>
         </div>
      </div>
      
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
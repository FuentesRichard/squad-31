import "../styles/Confirmacao.scss";
import relogioSVG from "../images/Relogio.svg";
import Pessoa from '../images/Person(Confirmacao).svg';

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
            <button onClick={popup} title="Fechar" className="fechar">x</button>
            <h2>Janela Modal</h2>
            <p>Esta é uma simples janela de modal.</p>
            <p>Você pode fazer qualquer coisa aqui, página de Login, pop-ups, ou formulários</p>
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
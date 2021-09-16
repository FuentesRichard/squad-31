import Relogio from '../images/Relogio.svg'
import Online_friends from '../images/Online_friends_pana.svg'
import Vector_7 from '../images/Vector_7.svg'
// import Vector_8 from '../images/Vector_8.svg'
import MapPin from '../images/map-pin.svg'
import user_check from '../images/user-check.svg'
import user_x from '../images/user-x.svg'

import '../styles/Agendamento.scss'

export function Agendamento() {
  type event = {
    target: any
  }

  function pesquisa(event: event) {
    let titulo = document.getElementById('titulo');
    if (titulo) titulo.innerHTML = '';

    let titulo_div = document.getElementById('Titulo-div');
    if (titulo_div)  titulo_div.style.margin = '0';

    let main = document.getElementById('main');
    if (main) main.style.backgroundImage = '';

    let select = document.getElementById('select-div');
    if (select) select.className = 'div-input2';

    let entrada = document.getElementById('div-entrada');
    if (entrada) entrada.className = 'div-input2';

    let saida = document.getElementById('div-saida');
    if (saida) {
      saida.className = 'div-input2';
      saida.id = 'div-saida2'
    }

    let botao = document.getElementById('botao');
    if (botao) botao.id = ('botao2')
  };

  const background = {
    backgroundImage: 'url(' + Online_friends + ')',
  };

  return (
    <div id="page-agendamento">
      <header>

        <img src={Relogio} alt="Relogio" /> 
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

      <main id="main">

        <form>
          <img id="vector_7" src={Vector_7} alt="Vector para esquerda" />
          <div id="Titulo-div">
            <strong id="titulo">Agende seu próximo evento!</strong>
          </div>
          <div id="input-div">

            <div id="select-div" className="div-input">
              <div>
                <img src={MapPin} alt="pino de mapa" />
                <p>Unidade</p>
              </div>

              <select>
                <option value="" disabled selected hidden>Busque por um escritório</option>
                <option value="0">São Paulo</option>
                <option value="1">Santos</option>
                <option value="2">Outro</option>
              </select>
              
            </div>

            <div id="div-entrada" className="div-input">
              <div>
                <img src={user_check} alt="" />
                <p>Check-in</p>
              </div>

              <input className="inputs"
                type="datetime-local"
                min="08:00:00:00"
                max="06:00:00:00"
                required
              />
            </div>

            <div id="div-saida" className="div-input">
              <div>
                <img src={user_x} alt="" />
                <p>Check-out</p>
              </div>

              <input className="inputs"
                type="datetime-local"
                min="08:00:00:00"
                max="06:00:00:00"
                required
              />
            </div>
          </div>
          <button id="botao" type="submit" onClick={pesquisa}>
            Pesquisar
          </button>
        </form>
      </main>
    </div>
  )
}
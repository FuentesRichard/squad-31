import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Relogio from '../images/Relogio.svg'
import Online_friends from '../images/Online_friends_pana.svg'
import Vector_7 from '../images/Vector_7.svg'
import Vector_8 from '../images/Vector_8.svg'
import MapPin from '../images/map-pin.svg'
import user_check from '../images/user-check.svg'
import user_x from '../images/user-x.svg'

import '../styles/Agendamento.scss'

export function Agendamento() {
  const history = useHistory();

  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [estado, setEstado] = useState('');

  async function handleAgendamento(event: FormEvent) {
    event.preventDefault()

    if (data.trim() === '' && hora.trim() === '' && estado.trim() === '') {
      return;
    }

    // history.push(`/agendamento/confirmar`)
  }

  const background = {
    backgroundImage: 'url(' + Online_friends + ')',
  };

  return (
    <div id="page-agendamento">
      {/* <header><img src={Relogio} alt="Relogio" /> <a href="#">Iníio</a> </header> */}
      <main style={background}>
        <form onSubmit={handleAgendamento}>
          <div id="Titulo">
            <img id="vector_7" src={Vector_7} alt="Vector para esquerda" />
            <strong>Agende seu próximo evento!</strong>
          </div>
          <div id="input-div">

            <div id="select-div" className="div-input">
              <div>
                <img src={MapPin} alt="pino de mapa" />
                <p>Unidade</p>
              </div>

              <select onChange={event => setEstado(event.target.value)}>
                <option value="" disabled selected hidden>Busque por um escritório</option>
                <option value="0">São Paulo</option>
                <option value="1">Santos</option>
                <option value="2">Outro</option>
                <img src={Vector_8} alt="Vector para baixo" />
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
                onChange={event => setHora(event.target.value)}
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
                onChange={event => setData(event.target.value)}
              />
            </div>

          </div>
          <button type="submit">
            Pesquisar
          </button>
        </form>
      </main>
    </div>
  )
}
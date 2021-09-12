import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

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

  return (
    <div id="page-agendamento">
      <main>
        <img src="" alt="Fcamara" />
        <form onSubmit={handleAgendamento}>
          <strong>Agendamento</strong>
          <input className="inputs"
            type="date"
            onChange={event => setData(event.target.value)}
          />
          <input className="inputs"
            type="time"
            min="08:00:00:00"
            max="06:00:00:00"
            onChange={event => setHora(event.target.value)}
            required
          />
          <select className="inputs" onChange={event => setEstado(event.target.value)}>
            <option value="0">São Paulo</option>
            <option value="1">Santos</option>
          </select>
          <button type="submit">
            Confirmar
          </button>
        </form>
        <p>Não quer fazer um agendamento? <Link to="/"> Então clique aqui e volte</Link></p>
      </main>
    </div>
  )
}
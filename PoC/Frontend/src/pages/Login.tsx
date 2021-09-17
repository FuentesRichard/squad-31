import '../styles/Login.scss'
import Illustration from '../images/Illustration_1.svg'
import Logo_teams from '../images/Logo-microsoft_teams.svg'

export function Login() {
    return (
        <div id="page-login">
            <aside>
                <img id="illustration" src={Illustration} alt="Homem apoiado em uma ampulheta segurando um relógio na mão"/>
            </aside>
            <main>
                <h1>Bem-vinde!</h1>
                <div id="separator"></div>
                <p id="texto">O nosso Day Office possui integração com o sistema Microsoft Teams, então pedimos que realize o login através da sua conta na plataforma.</p>
                <button> <img src={Logo_teams} alt="Logo Microsoft Teams" /> Entrar com Microsoft Teams</button>
                <p id="recuperarSenha">Esqueceu seu senha? <a href="#">Clique aqui</a></p> 
            </main>
        </div>
    )
}

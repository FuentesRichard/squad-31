import "../styles/Home.scss";
import relogioSVG from "../images/Relogio.svg";
import lupaSVG from "../images/Lupa.svg";
import settings from "../images/settings.svg";

function ativar_md() {
   let md = document.getElementById('meuday')
   if (md) md.className = 'ativo'

   let mt = document.getElementById('microsoft')
   if (mt) mt.className = 'inativo'
}

function ativar_mt() {
   let mt = document.getElementById('microsoft')
   if (mt) mt.className = 'ativo'

   let md = document.getElementById('meuday')
   if (md) md.className = 'inativo'
}

function newPlaceholder(){
   const newWidth = window.innerWidth;
   if (newWidth > 800) {
      return 'Pesquisar meus eventos'
   }
   else {
      return 'Pesquisar'
   }
}

export function Home() {
   return (
      <div id="page-home">
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

         <main>
            <div className="titles">
               <div onClick={ativar_md} id="meuday" className="ativo">
                  <h1>Meu Day Office</h1>
               </div>
               <div onClick={ativar_mt} id="microsoft" >
                  <h1>Microsoft Teams</h1>
               </div>
            </div>

            <div className="container-eventos">
               <h2>Eventos</h2>
               <div>
                  <label htmlFor="pesquisa" ><img src={lupaSVG} /></label>
                  <input name="pesquisa" type="text" placeholder={newPlaceholder()}/>
               </div>
               <button>+ Criar</button>
            </div>
            <div className="cards">
               <img src={settings} alt="" />
               <h1>Unidade Teste</h1>
               <p className="Estacao">Estação teste</p>
               <p className="horario">13h - 15h</p>
            </div>
         </main>
      </div>
   );
}
import "../styles/Home.scss";
import relogioSVG from "../images/Relogio.svg";
import lupaSVG from "../images/Lupa.svg";

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

export function Home() {
   return (
      <div id="page-home">
         <header>
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
                     <a href="#">Sair</a>
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
                  <input id="pesquisa" type="text" placeholder="Pesquisar meus eventos" />
               </div>
               <button>+ Criar</button>
            </div>

         </main>
      </div>
   );
}
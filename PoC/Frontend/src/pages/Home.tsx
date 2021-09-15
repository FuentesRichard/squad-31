import "../styles/Home.scss";
import relogioSVG from "../images/Logo.svg";

export function Home() {
   return (
      <div id="page-home">
         <header>
            <img src={relogioSVG}></img>
            <nav>
               <ul>
                  {/* <li>
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
                  </li> */}
               </ul>
            </nav>
         </header>

         <main>
            <div className="titles">
               <div>
                  <h1>Meu Day Office</h1>
               </div>
               <div>
                  <h1>Microsoft Teams</h1>
               </div>
            </div>

            <div className="container-eventos">
               <h2>Eventos</h2>
               <input type="text" placeholder="Pesquisar meus eventos" />
               <button>+ Criar</button>
            </div>

         </main>
      </div>
   );
}
import "../styles/Home.scss";

export function Home() {
   return (
      <div id="page-home">
         <header>
            <img src=""></img>
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

            <div>
               <h1>Meu Day Office</h1>
               <input type="text" placeholder="Pesquisar meus eventos" />
               <button>+ Criar</button>
            </div>

            <div>
               <h2>Eventos</h2>
               <h2>Histórico</h2>
            </div>

         </main>
      </div>
   );
}
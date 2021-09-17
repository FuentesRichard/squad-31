import React, { useCallback, useEffect, useState } from 'react';
import { Evento, PageHome } from './styles';
import lupaSVG from '../../assets/images/Lupa.svg';
import { useHistory } from 'react-router';
import api from '../../services/api';



const Home : React.FC = () => {   
   interface AgendamentoData{
      id: number,
      data: string,
      horaInicial: string,
      horaFinal: string;
   }
   const tokenMS = localStorage.getItem("@DayOffice:microsoftToken");
   const tokenApi = localStorage.getItem("@DayOffice:tokenApi");
   const [agendamentos,setAgendamentos] = useState([] as AgendamentoData[]);
   useEffect(()=>{
      async function ObterAgendamentos(){
         var response = await api.get(`/api/agendamento/funcionario`,{            
            headers: {
                'Authorization' : `Bearer ${tokenApi}`
            }         
        });         
        setAgendamentos([...response.data]);
      }

      ObterAgendamentos();
   },[])
   
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

    const history = useHistory();
    const handleToAgendamento = useCallback(()=>{
        history.push('/agendamento');
    },[]);

    return (
        <PageHome>            
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
               <button onClick={handleToAgendamento} >+ Criar</button>
            </div>

            <div className="eventos">
               {
                  agendamentos.map(item => {
                     return(
                        <Evento>
                           <h1>{`Horário ${item.horaInicial} e Saída ${item.horaFinal}`}</h1>                        
                        </Evento>
                     );
                  })
               }
            </div>
         </main>
        </PageHome>
    )
};

export default Home;
import React, { useCallback } from 'react';
import { PageHome } from './styles';
import lupaSVG from '../../assets/images/Lupa.svg';
import { useHistory } from 'react-router';

const Home : React.FC = () => {
    const history = useHistory();
    const handleToAgendamento = useCallback(()=>{
        history.push('/agendamento');
    },[]);

    return (
        <PageHome>            
         <main>
            <div className="titles">
               <div className="ativo">
                  <h1>Meu Day Office</h1>
               </div>
               <div>
                  <h1>Microsoft Teams</h1>
               </div>
            </div>

            <div className="container-eventos">
               <h2>Eventos</h2>
               <div>
                  <label htmlFor="pesquisa" ><img src={lupaSVG} /></label>
                  <input id="pesquisa" type="text" placeholder="Pesquisar meus eventos" />
               </div>
               <button onClick={handleToAgendamento}>+ Criar</button>
            </div>

         </main>
        </PageHome>
    )
};

export default Home;
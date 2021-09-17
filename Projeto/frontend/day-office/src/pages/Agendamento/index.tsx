import React, { FormEvent, useCallback, useEffect, useState }  from "react";
import Vector_7 from '../../assets/images/Vector_7.svg';
import MapPin from '../../assets/images/map-pin.svg';
import user_check from '../../assets/images/user-check.svg';
import user_x from '../../assets/images/user-x.svg';
import { Mesa, MesaOcupada, PageAgendamento, TituloAgendamento } from "./styles";
import api from "../../services/api";
import { Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

interface EscritorioData {
    id: number,
    estado:string,
    cidade: string,
}
interface EstacaoTrabalho {
    id : number,
    numeroLugar: number,
    disponivel: boolean
}
const Agendamento : React.FC = () => {
    type event = {
        target: any
    }
    
    var history = useHistory();
     
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
    const [dataInicio, setDataInicio] = useState<string>();
    const [dataFim, setDataFim] = useState<string>();
    const [estado, setEstado] = useState<string>("1");
    const [estacoesTrabalho, setEstacoesTrabalho] = useState([] as Array<EstacaoTrabalho>);
    const [escritorios, setEscritorios] = useState([] as EscritorioData[]);

    const tokenApi = localStorage.getItem("@DayOffice:tokenApi");
    const tokenMS = localStorage.getItem("@DayOffice:microsoftToken");

    const handleAgendar = useCallback(async (id : number)=>{
        if(window.confirm('Deseja agendar essa mesa?')){            
            var response = await api.post(`/api/agendamento`,{
                microsoftJwt: tokenMS,
                data: dataInicio,
                checkIn : dataInicio,
                checkOut: dataFim,
                idEscritorio: estado,
                idEstacaoTrabalho: id
            },{            
                headers: {
                    'Authorization' : `Bearer ${tokenApi}`
                }
            });    

            history.push('/home');
        }
    },[dataInicio, dataFim, estado]);

    const handleAgendamento = useCallback(async (event : FormEvent)=> {
        event.preventDefault();
        var response = await api.get<Array<EstacaoTrabalho>>(`/api/EstacoesTrabalho?idEscritorio=${estado}&checkIn=${dataInicio}&checkOut=${dataFim}`, {            
            headers: {
                'Authorization' : `Bearer ${tokenApi}`
            }
        });

        if(response.status == 200){                                    
            await setEstacoesTrabalho([...response.data]);
        }
    },[dataInicio, dataFim, tokenApi]);

    useEffect(()=>{
        async function ObterEscritorio(){            
            const response = await api.get<Array<EscritorioData>>("/api/escritorio", {
                headers:{
                    'Authorization' : `Bearer ${tokenApi}`
                }
            });
            await setEscritorios([...response.data]);
        }
        ObterEscritorio();
    },[]);

    return (
        <>
        <PageAgendamento>            
            <main>
                <form onSubmit={handleAgendamento}>
                
                    <TituloAgendamento>
                        <Link to="/home">
                            <img id="vector_7" src={Vector_7} alt="Vector para esquerda" />                        
                        </Link>
                        <strong>Agende seu próximo evento!</strong>
                    </TituloAgendamento>
                               
                <div id="input-div">
                    <div id="select-div" className="div-input">
                    <div>
                        <img src={MapPin} alt="pino de mapa" />
                        <p>Unidade</p>
                    </div>
                    <select onChange={event => setEstado(event.target.value)}>
                        {
                             escritorios.map(item => {
                                return (<option key={item.id} value={item.id}>{item.cidade}</option>);
                            })
                        }
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
                        max="18:00:00:00"
                        onChange={event => setDataInicio(event.target.value)}
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
                        max="18:00:00:00"
                        onChange={event => setDataFim(event.target.value)}
                    />
                    </div>

                </div>
                <button type="submit">
                    Pesquisar
                </button>
                </form>                
                {           
                <div style={{marginTop: '45px'}}>         
                    <Grid container spacing={1}>
                    {
                        estacoesTrabalho.map((item,index) => {  
                            if(item.disponivel)                          {
                                return (                            
                                    <Grid container justifyContent="center" item xs={12} md={6} lg={6} xl={4} key={item.id}>
                                        {
                                            <Mesa onClick={() => {handleAgendar(item.id)}}>
                                                {item.numeroLugar}
                                            </Mesa>
                                        }
                                    </Grid>
                                );
                            }else{
                                return (                            
                                    <Grid container  justifyContent="center" item xs={12} md={6} lg={6} xl={4} key={item.id}>
                                        {
                                            <MesaOcupada>
                                                {item.numeroLugar}
                                            </MesaOcupada>
                                        }
                                    </Grid>
                                );
                            }
                        })
                    }
                    </Grid>
                </div>
                }                
            </main>
        </PageAgendamento>
        </>
    );
};

export default Agendamento;
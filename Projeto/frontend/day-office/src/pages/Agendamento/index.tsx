import React, { FormEvent, useCallback, useEffect, useState }  from "react";
import Relogio from '../../assets/images/Relogio.svg';
import Online_friends from '../../assets/images/Online_friends_pana.svg';
import Vector_7 from '../../assets/images/Vector_7.svg';
import Vector_8 from '../../assets/images/Vector_8.svg';
import MapPin from '../../assets/images/map-pin.svg';
import user_check from '../../assets/images/user-check.svg';
import user_x from '../../assets/images/user-x.svg';
import { PageAgendamento } from "./styles";
import api from "../../services/api";
import { useAutenticacao } from "../../hooks/auth";
import { Grid } from "@material-ui/core";

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
    const { user } = useAutenticacao()

    const [dataInicio, setDataInicio] = useState<string>();
    const [dataFim, setDataFim] = useState<string>();
    const [estado, setEstado] = useState<string>("1");
    const [estacoesTrabalho, setEstacoesTrabalho] = useState([] as EstacaoTrabalho[]);

    const [escritorios, setEscritorios] = useState([] as EscritorioData[]);

    // const groupArr = (data: Array<object>, n: number) => {
    //     var group = [] as Array<object>;
    //     for (var i = 0, j = 0; i < data.length; i++) {
    //         if (i >= n && i % n === 0)
    //             j++;
    //         group[j] = group[j] || [];
    //         group[j].push(data[i])
    //     }
    //     return group;
    // }

    const handleAgendamento = useCallback(async (event : FormEvent)=> {
        event.preventDefault();
        debugger;
        var response = await api.get<Array<EstacaoTrabalho>>(`/api/EstacoesTrabalho?idEscritorio=${estado}&checkIn=${dataInicio}&checkOut=${dataFim}`, {            
            headers: {
                'Authorization' : `Bearer ${user.tokenApi}`
            }
        });

        if(response.status == 200){
            await setEstacoesTrabalho([...response.data]);
        }
    },[dataInicio, dataFim, user.tokenApi]);

    useEffect(()=>{
        async function ObterEscritorio(){            
            const response = await api.get<Array<EscritorioData>>("/api/escritorio", {
                headers:{
                    'Authorization' : `Bearer ${user.tokenApi}`
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
                <Grid container spacing={1}>
                {
                    estacoesTrabalho.map(item => {
                        return (
                            <Grid container item xs={12} md={6} lg={6} xl={4} key={item.id}>
                                {item.numeroLugar}-{item.disponivel ? "Sim" : "Não" }
                            </Grid>
                        );
                    })
                }
                </Grid>
            </main>
        </PageAgendamento>
        </>
    );
};

export default Agendamento;
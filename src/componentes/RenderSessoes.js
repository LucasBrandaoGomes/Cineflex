import styled from "styled-components"
import axios from "axios"
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function HorariosSessoes({horarioSessao}){
    return(
        <button>{horarioSessao}</button>
    )
}

function Sessoes({dia, data}){
    return (
        <span> {dia} - {data}</span>    
        );
    }
export default function RenderSessoes(){
    
    const { idFilme } = useParams();
    const [sessoes, setSessoes] = React.useState([])
    


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response) => {
          setSessoes([...response.data.days]);
        });
      }, []);

    return(
        <Horarios>
            {sessoes.length === 0 ? 'Carregando sessões...' :
                sessoes.map(sessao => <Horario> <Sessoes dia={sessao.weekday} data={sessao.date}/>
                <Hora sessao={sessao} key=""/></Horario>)}
        </Horarios>

    )  
}
function Hora({sessao}){
    return sessao.showtimes.map(dia => <HorariosSessoes horarioSessao={dia.name}/>)

}


const Horarios = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    `
const Horario = styled.div`
    width:100%;
    margin-bottom:22px;
    
    
    button{
        width: 83px;
        height: 43px;

        background: #E8833A;
        border-radius: 3px;
        color: #FFFFFF;
    }
    `
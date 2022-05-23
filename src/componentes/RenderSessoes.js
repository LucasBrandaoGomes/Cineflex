import styled from "styled-components"
import axios from "axios"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Top from "./Top";
import Footer from "./Footer"

function HorariosSessoes({horarioSessao, id}){
    return(
        <Link to={`/assentos/${id}`}>
            <button>{horarioSessao}</button>
        </Link>
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
    const [tituloFilmeEscolhido, setTituloFilmeEscolhido] = React.useState("")
    const [imgFilmeEscolhido, setImgFilmeEscolhido] = React.useState("")


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response) => {
          setSessoes([...response.data.days]);
          setTituloFilmeEscolhido(response.data.title)
          setImgFilmeEscolhido(response.data.posterURL)
        });
      }, []);

    return(
        <>
        <Top children={"Escolha a sessão"}/>
        <Horarios>
            {sessoes.length === 0 ? 'Carregando sessões...' :
                sessoes.map(sessao => <Horario> <Sessoes dia={sessao.weekday} data={sessao.date}/>
                <Hora sessao={sessao} key=""/></Horario>)}
        </Horarios>
        <Footer imgFilme={imgFilmeEscolhido} tituloFilme={tituloFilmeEscolhido}/>
        </>

    )  
}
function Hora({sessao}){
    return sessao.showtimes.map(dia => <HorariosSessoes horarioSessao={dia.name} id={dia.id}/>)

}


const Horarios = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    padding-left: 24px;
    `
const Horario = styled.div`
    width:100%;
    margin-bottom:22px;

    span{

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;

        color: #293845;
    }
    
    
    button{
        width: 83px;
        height: 43px;

        background: #E8833A;
        border-radius: 3px;
        color: #FFFFFF;
        margin-right: 8px;
        margin-top:22px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.02em;

        color: #FFFFFF;


    }
    `
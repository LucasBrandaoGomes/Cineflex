import styled from "styled-components"
import axios from "axios"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Top from "./Top";

export default function RenderSeats(){
    
    const { idSessao } = useParams();
    const [lugares, setLugares] = React.useState([])
    const [nomeComprador, setNomeComprador] = useState("");
    const [cpf, setCPF] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response) => {
          setLugares([...response.data.seats]);
        });
      }, []);
    

    return(
        <Tela3>
            <Top children={"Selecione o(s) assento(s)"}/>
            <ContainerAssentos>
                {lugares.length === 0 ? 'Carregando assentos...' :
                        lugares.map(lugar => <Lugares numero={lugar.name} disponibilidade={lugar.isAvailable}/>)}
            </ContainerAssentos>
            <ContainerStatusAssento>
                <div><Selecionado></Selecionado><p>Selecionado</p></div>
                <div><Disponivel></Disponivel><p>Disponivel</p></div>
                <div><Indisponivel></Indisponivel><p>Indisponivel</p></div>
            </ContainerStatusAssento>
            <Form>
                <label for="campoNome">Nome do comprador:</label>
                <input type="text" placeholder="Digite seu nome" id="campoNome" value={nomeComprador} onChange={e => setNomeComprador(e.target.value)} required/>
                <label for="campoNome">Nome:</label>
                <input type="text" placeholder="Digite seu CPF" id="campoNome" value={cpf} onChange={e => setCPF(e.target.value)} required/>
            </Form>
            <Link to={"/sucesso"}>
                <ReservarAssento>Reservar assento(os)</ReservarAssento>
            </Link>
        </Tela3>
    )
}

function Lugares({numero, disponibilidade}){
    return(
        <Assento disponibilidade={disponibilidade}>
            {numero.length >=2 ? <p>{numero}</p> : <p>{`0${numero}`}</p>}
        </Assento>
    )

}

const Form = styled.form`
    display:flex;
    flex-direction: column;
    margin-top: 42px;
    margin-bottom: 50px;

    label{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #293845;
    }

    input{
        width: 327px;
        height: 51px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom:7px;

        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #AFAFAF;
    }

    `

const Tela3 = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const ContainerAssentos = styled.div`
    display: flex;
    flex-wrap:wrap;
    width:100%;
    padding-left: 24px;
    padding-right: 17px;
    `
const Assento = styled.button`
    width: 26px;
    height: 26px;
    margin-right:7px;
    margin-bottom:18px;

    background: ${(props) => props.disponibilidade ? "#C3CFD9" : "#FBE192"};
    border: 1px solid ${(props) => props.disponibilidade ? "#808F9D" : "#F7C52B"};
    border-radius: 12px;
    position:relative;

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.04em;

        color: #000000;
        position: absolute;
        left: 5px;
        bottom: 7px;;
    }
    `
const ContainerStatusAssento = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100%;


    div{
        display:flex;
        flex-direction:column;
        align-items:center;
    
        p{
            font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;

        color: #4E5A65;
        }
    }

    `
const Selecionado = styled.div`
    width: 24px;
    height: 24px;

    background: #8DD7CF;
    border: 1px solid #1AAE9E;
    border-radius: 17px;
    `
const Disponivel = styled.div`
    width: 24px;
    height: 24px;

    background: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 17px;
`
const Indisponivel = styled.div`
    width: 24px;
    height: 24px;

    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
    `
const ReservarAssento = styled.button`
    width: 225px;
    height: 42px;

    background: #E8833A;
    border-radius: 3px;
    margin-bottom: 27px;

    text-decoration: none; 
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #FFFFFF;

    `
import Top from "./Top"
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components"

export default function Sucesso({reserva}){
    
    const{title,date,hour,places,name,cpf}=reserva;
    
    return(
        <>
            <Top children={"Pedido feito com sucesso!"}/>
                <Sala>
                    <h3>Filme e sessão</h3>
                    <p>{title}</p>
                    <p>{date.weekday} - {hour}</p>
                </Sala>
                <Tickets>
                    <h3>Ingressos</h3>
                    <p>{places.map(seat=>`Assento ${seat}`)}</p>
                </Tickets>
                <Dados>
                    <h3>Comprador</h3>
                    <p>Nome: {name}</p>
                    <p>CPF: {cpf}</p>
                </Dados>  
            <Link to={"/"}>
                <Home>Voltar para Home</Home>
            </Link>
        </>
        
        
    )
}

const Home = styled.button`
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
    letter-spacing: 0.04em;
    margin-top:62px;
    margin-left: 74px;
    color: #FFFFFF;

    `

const Sala = styled.div`
    margin-left: 29px;

    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        margin-bottom:10px;

        color: #293845;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;

        color: #293845;
    }
`
const Tickets = styled.div`
    margin-left: 29px;
    margin-top:35px;

    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        margin-bottom:10px;

        color: #293845;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;

        color: #293845;
    }
`
const Dados = styled.div`
    margin-left: 29px;
    margin-top:35px;

    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        margin-bottom:10px;
        color: #293845;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;

        color: #293845;
    }
`

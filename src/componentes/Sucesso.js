import Top from "./Top"
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components"

export default function Sucesso({reserva}){
    
    const{title,date,hour,places,name,cpf}=reserva;
    
    console.log("------")
    return(
        <>
            <Top children={"Pedido feito com sucesso!"}/>
                <div>
                    <h3>Filme e sessão</h3>
                    <p>{title}</p>
                    <p>{date} {hour}</p>
                </div>
                <div>
                    <h3>Ingressos</h3>
                    {/*<p>{places.map(seat=>`Assento ${seat.name}`)}</p>*/}
                </div>
                <div>
                    <h3>Comprador</h3>
                    <p>{name}</p>
                    <p>{cpf}</p>
                </div>  
            <Link to={"/"}>
                <Home>Voltar para Home</Home>
            </Link>
        </>
        
        
    )
}
//fazer função de zerar tudo e chamar no botao Home//


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
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #FFFFFF;

    `
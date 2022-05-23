import Top from "./Top"
import { Link } from 'react-router-dom';
import styled from "styled-components"


export default function Sucesso(){
    
    function Informacoes({titulo, texto1, texto2, texto3}){
        return(
            <div>
                <h1>{titulo}</h1>
                <p>{texto1} {texto2}</p>
                <p>{texto3}</p>    
            </div>    
        )
    }
    
    return(
        <>
            <Top children={"Pedido feito com sucesso!"}/>
            <Informacoes titulo={"Filme e sessão"} texto1={"NOME DO FILME"} texto2={"DATA E HORARIOS DO FILME"}/>
            <h1>Ingressos</h1>
            <p>Assento x</p>
            <Informacoes titulo={"Comprador"} texto1={"Nome:"} texto2={"lucas brandao gomes"} texto3={"CPF: 111111111-31"}/>
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
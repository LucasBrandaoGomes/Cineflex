import styled from "styled-components"
import axios from "axios"
import { Link } from 'react-router-dom';
import React, {useEffect} from 'react';
import Top from "./Top";

function FotoFilme({source, id}){
        
    return (
        <Link to={`/sessoes/${id}`}>
          <img src={source}  alt="Cartazes dos filmes"/>
        </Link>
    );
  }
  
export default function Conteudo(){

    const [filmes, setFilmes] = React.useState([]);
    
    useEffect(() => {
    
    const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
    promise.then((response) => {
        setFilmes([...response.data]);
    });
  }, []);

    
    return(
        <>
        <Top children={"Selecione um filme"}/>
        <ContainerConteudo>
                {filmes.length === 0 ? 'Carregando filmes em cartaz...' :
                filmes.map((filme,index) => <CartazFilme><FotoFilme source={filme.posterURL} key={index} id={filme.id}/></CartazFilme>)
                }
        </ContainerConteudo>
        </>
    )
}
const ContainerConteudo =styled.div`
    display:flex;
    width:375px;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-right: 25px;
    padding-left:30px;
    
    background: #FFFFFF;`
    

const CartazFilme = styled.div`
    padding:8px;
    margin-bottom:11px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    background: #FFFFFF;

    img{ 
        width: 129px;
        height: 193px;
    }
    :hover{
        cursor:pointer;
    }
    `

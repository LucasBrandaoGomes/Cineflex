import styled from "styled-components"
import axios from "axios"
import { useParams,  useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Top from "./Top";
import Footer from "./Footer"
import Lugares from "./Lugares"

export default function RenderSeats({setReserva, reserva}){
    
    const navigate = useNavigate();
    const { idSessao } = useParams();
    const [filme, setFilme] = React.useState("")
    const [lugares, setLugares] = React.useState([])
    const [infos, setInfos] = React.useState({})
    const [dataDia, setDataDia] = React.useState({})
    const [horario, setHorario] = React.useState("")
    const [nomeComprador, setNomeComprador] = React.useState("");
    const [cpf, setCPF] = React.useState("");
    const [assentosSelecionados, setAssentosSlecionados] = React.useState([])
    
    function submitData(event) {
        event.preventDefault();
        const envio =
        {
            ids: assentosSelecionados.map(assento=>assento.id),
            name: nomeComprador,
            cpf: cpf
        }
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",envio
            );

        promise.then(response =>{
            setReserva({
                title: filme.title,
                date: dataDia,
                hour:horario,
                //places: assentosSelecionados.map(assento=>assento.id),
                name: nomeComprador,
                cpf:cpf
            })

            navigate("/sucesso");
        })

        setNomeComprador("");
        setCPF("");
      }

    console.log(reserva)
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response) => {
          setLugares([...response.data.seats]);
          setInfos({...response.data.movie})
          setDataDia({...response.data.day})
          setHorario(response.data.name)
          setFilme(response.data.movie)
        });
      }, []);
    
    function Trocar(nome, id){
        if (!assentosSelecionados.some(lugar => lugar.id === id)){
            setAssentosSlecionados([...assentosSelecionados, {nome, id}])
        }else{
            setAssentosSlecionados(assentosSelecionados.filter(lugar  => lugar.id !== id))
        }
    }
      
    return(
        <Tela3>
            <Top children={"Selecione o(s) assento(s)"}/>
            <ContainerAssentos>
                {lugares.length === 0 ? 'Carregando assentos...' :
                        lugares.map((lugar,index) => <Lugares 
                                            nome={lugar.name}
                                            disponibilidade={lugar.isAvailable}
                                            key={index}
                                            id={lugar.id}
                                            clicado={(nome, id) => Trocar(nome, id)}
                                            selecionado={assentosSelecionados.some(item => item.id ===lugar.id)}
                                            />)}
            </ContainerAssentos>
            <ContainerStatusAssento>
                <div><Selecionado></Selecionado><p>Selecionado</p></div>
                <div><Disponivel></Disponivel><p>Disponivel</p></div>
                <div><Indisponivel></Indisponivel><p>Indisponivel</p></div>
            </ContainerStatusAssento>
            <Form onSubmit={submitData}>
                <label htmlFor="campoNome">Nome do comprador:</label>
                <input type="text" placeholder="Digite seu nome" id="campoNome" value={nomeComprador} onChange={e => setNomeComprador(e.target.value)} required/>
                <label htmlFor="campoCPF">CPF:</label>
                <input type="number" placeholder="Digite seu CPF" id="campoCPF" value={cpf} onChange={e => setCPF(e.target.value)} required/>
            </Form >
            <Link to={"/sucesso"}>
                <ReservarAssento type="submit">Reservar assento(os)</ReservarAssento>
            </Link>
            <Footer imgFilme={infos.posterURL} tituloFilme={infos.title} texto1={dataDia.weekday} texto2={dataDia.date}/>
        </Tela3>
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
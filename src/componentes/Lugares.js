
import styled from "styled-components"

export default function Lugares({nome, disponibilidade, id, selecionado, clicado}){
    return(
        <Assento disponibilidade={disponibilidade} selecionado={selecionado} onClick={()=> (!disponibilidade) ? alert("Esse assento não está disponível"):clicado(nome, id)}>
            {nome.length >=2 ? <p>{nome}</p> : <p>{`0${nome}`}</p>}
        </Assento>
    )

}
function CorDoAssendo(disponibilidade, selecionado){
    if (selecionado){
        return "#8DD7CF"
    }else if (disponibilidade){
        return "#C3CFD9"
    }else{
        return "#FBE192"
    }
}
function CorBordaDoAssendo(disponibilidade, selecionado){
    if (selecionado){
        return "#1AAE9E"
    }else if (disponibilidade){
        return "#808F9D"
    }else{
        return "#F7C52B"
    }
}


const Assento = styled.button`
    width: 26px;
    height: 26px;
    margin-right:7px;
    margin-bottom:18px;

    background: ${({disponibilidade, selecionado}) => CorDoAssendo(disponibilidade,selecionado)};
    border: 1px solid ${({disponibilidade, selecionado}) => CorBordaDoAssendo(disponibilidade,selecionado)};
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
import styled from "styled-components"

export default function Footer({imgFilme, tituloFilme, texto1, texto2}){
    return(
        <>
        {
        texto1 === null && texto2 === null ?
            <Rodape>
                <div className="poster"><img src={imgFilme} alt="Cartaz do filme escolhido"/></div>
                <h1>{tituloFilme}</h1>
            </Rodape>
            :
            <Rodape>
                <div className="poster"><img src={imgFilme} alt="Cartaz do filme escolhido"/></div>
                <div className="infos"><h1>{tituloFilme}</h1><p>{texto1} - {texto2}</p></div>
            </Rodape>
        }
        </>
    );
}
const Rodape = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;

    .poster{
        display:flex;
        justify-content: center;
        align-items: center;

        width: 64px;
        height: 89px;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin-left: 7px;
        margin-right: 14px;
        padding:8px;
        
        img{
            width: 48px;
            height: 72px;
        }}
    .infos{
        display: flex;
        flex-direction: column;

        p{font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        display: flex;
        align-items: center;    

        color: #293845;
        }
    }
    
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        display: flex;
        align-items: center;    

        color: #293845;
        }
    
    `
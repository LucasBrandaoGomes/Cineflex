import styled from 'styled-components';

export default function Top(){
    return(
        <ContainerTopo>
            <Topo1>
                <span>CINEFLEX</span>
            </Topo1>
            <Topo2>
                <span> Selecione o filme</span>
            </Topo2>
        </ContainerTopo>
           
    )
}
const ContainerTopo = styled.div`
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;`

const Topo1 = styled.div`
    width: 100%;
    height: 67px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    background: #C3CFD9;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content:center;

    color: #E8833A;`


const Topo2 = styled.div`
    width: 100%;
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #293845;`


    
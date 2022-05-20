import styled from 'styled-components';
export default function Top(){
    return(
        <ContainerTopo>
            <Topo>
                CINEFLEX
            </Topo>
        </ContainerTopo>
           
    )
}
const ContainerTopo = styled.div`
    width: 375px;
    height: 67px;
    background: #C3CFD9;
    display: flex;
    align-items: center;
    text-align: center;`

const Topo = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #E8833A;`
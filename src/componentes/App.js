import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Conteudo from "./Conteudo"
import RenderSessoes from './RenderSessoes';
import RenderSeats from './RenderSeats';
import Sucesso from "./Sucesso";
import React from 'react';


export default function App(){
    
    const[reserva,setReserva]= React.useState({});

    return(
        <BrowserRouter>
            
                <div className="root">
                    <Routes>
                        <Route path="/" element={<Conteudo />}/>
                        <Route path="/sessoes/:idFilme" element={<RenderSessoes />}/>
                        <Route path="/assentos/:idSessao" element={<RenderSeats setReserva ={setReserva} reserva={reserva}/>}/>
                        <Route path="/sucesso" element={<Sucesso reserva={reserva}/>}/>
                        <Route path="/" element={<Conteudo/>}/>
                    </Routes>
                </div>
            
        </BrowserRouter>
    )
}
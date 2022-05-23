import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Conteudo from "./Conteudo"
import RenderSessoes from './RenderSessoes';
import RenderSeats from './RenderSeats';
import Sucesso from "./Sucesso";

export default function App(){
    return(
        <BrowserRouter>
            
                <div className="root">
                    <Routes>
                        <Route path="/" element={<Conteudo />}/>
                        <Route path="/sessoes/:idFilme" element={<RenderSessoes />}/>
                        <Route path="/assentos/:idSessao" element={<RenderSeats />}/>
                        <Route path="/sucesso" element={<Sucesso/>}/>
                        <Route path="/" element={<Conteudo/>}/>
                    </Routes>
                </div>
            
        </BrowserRouter>
    )
}
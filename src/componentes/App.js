import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Conteudo from "./Conteudo"
import RenderSessoes from './RenderSessoes';
import Top from "./Top"
//import RenderSessoes from './RenderSessoes';
export default function App(){
    return(
        <BrowserRouter>
            
                <div className="root">
                   
                    <Top/>
                    <Routes>
                        <Route path="/" element={<Conteudo />}/>
                        <Route path="/sessoes/:idFilme" element={<RenderSessoes />}/>
                        
                    </Routes>
                </div>
            
        </BrowserRouter>
    )
}
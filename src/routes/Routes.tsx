import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// Pages
import Home from 'pages/Home';
import Projetos from 'pages/Projetos';
import Contato from 'pages/Contato';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home/>} />
                <Route path="/projetos" element={<Projetos/>} />
                <Route path="/contato" element={<Contato/>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
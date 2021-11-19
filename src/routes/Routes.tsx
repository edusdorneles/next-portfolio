import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Layout from "components/Layout";

// Pages
import Home from 'pages/Home/Home';
import Projetos from 'pages/Projetos/Projetos';
import Contato from 'pages/Contato/Contato';

// Styles
import { GlobalStyle } from 'styles/Global';

const Routes: React.FC = () => {
    return (        
        <BrowserRouter>
            <GlobalStyle />

            <Layout>
                <Switch>
                    <Route path="/" element={<Home/>} />
                    <Route path="/projetos" element={<Projetos/>} />
                    <Route path="/contato" element={<Contato/>} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes;
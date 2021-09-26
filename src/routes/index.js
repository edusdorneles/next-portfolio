import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// Pages
import Home from '../pages/Home/Home';
import Projetos from '../pages/Projetos/Projetos';
import Contato from '../pages/Contato/Contato';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projetos" component={Projetos} />
                <Route exact path="/contato" component={Contato} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default Routes;
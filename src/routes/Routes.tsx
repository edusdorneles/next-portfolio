import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Layout from "components/Layout";

// Styles
import { GlobalStyle } from 'styles/Global';

// Pages
const Home = React.lazy(() => import('pages/Home/Home'));
const Projetos = React.lazy(() => import('pages/Projetos/Projetos'));
const Contato = React.lazy(() => import('pages/Contato/Contato'));

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />

            <Layout>
                <Switch>
                    <Route 
                        path="/" 
                        element={
                            <React.Suspense fallback={false}>
                                <Home />
                            </React.Suspense>
                        }
                    />

                    <Route 
                        path="/projetos" 
                        element={
                            <React.Suspense fallback={false}>
                                <Projetos />
                            </React.Suspense>
                        }
                    />

                        <Route
                            path="/contato"
                            element={
                                <React.Suspense fallback={false}>
                                    <Contato />
                                </React.Suspense>
                            }
                        />                    
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes;
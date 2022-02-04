import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Layout from "components/Layout";
import Loading from "components/Loading/Loading";

// Styles
import { GlobalStyle } from "styles/Global";

// Pages
const Home = React.lazy(() => import("pages/Home/Home"));
const Projects = React.lazy(() => import("pages/Projects/Projects"));
const Contact = React.lazy(() => import("pages/Contact/Contact"));

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Layout>
        <Switch>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          />

          <Route
            path="/projetos"
            element={
              <React.Suspense fallback={<Loading />}>
                <Projects />
              </React.Suspense>
            }
          />

          <Route
            path="/contato"
            element={
              <React.Suspense fallback={<Loading />}>
                <Contact />
              </React.Suspense>
            }
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;

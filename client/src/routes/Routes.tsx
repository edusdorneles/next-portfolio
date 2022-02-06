import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Layout from "components/Layout";
import Loading from "components/Loading/Loading";
import { AuthContextProvider } from "providers/AuthContext";

// Styles
import { GlobalStyle } from "styles/Global";

// Middlewares
import CheckUser from "middlewares/CheckUser";

// Pages
const Home = React.lazy(() => import("pages/Home/Home"));
const Projetos = React.lazy(() => import("pages/Projetos/Projetos"));
const Contato = React.lazy(() => import("pages/Contato/Contato"));
const Admin = React.lazy(() => import("pages/Admin/Admin"));
const Dashboard = React.lazy(() => import("pages/Dashboard/Dashboard"));

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <AuthContextProvider>
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
              path="/projects"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Projetos />
                </React.Suspense>
              }
            />

            <Route
              path="/contact"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Contato />
                </React.Suspense>
              }
            />

            <Route
              path="/admin"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Admin />
                </React.Suspense>
              }
            />

            <Route
              path="/dashboard"
              element={
                <React.Suspense fallback={<Loading />}>
                  <CheckUser>
                    <Dashboard />
                  </CheckUser>
                </React.Suspense>
              }
            />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;

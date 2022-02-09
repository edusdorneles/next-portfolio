import React from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "components/Layout";
import Loading from "components/Loading/Loading";
import { AuthContextProvider } from "providers/AuthContext";

// Styles
import { GlobalStyle } from "styles/Global";

// Middlewares
import CheckAuth from "middlewares/CheckAuth";

// Pages
const Home = React.lazy(() => import("pages/Home/Home"));
const Projects = React.lazy(() => import("pages/Projects/Projects"));
const Contact = React.lazy(() => import("pages/Contact/Contact"));
const Admin = React.lazy(() => import("pages/Admin/Admin"));

// Private pages
const Dashboard = React.lazy(() => import("pages/Dashboard/Dashboard"));
const DashProjects = React.lazy(
  () => import("pages/Dashboard/Projects/Projects")
);
const DashUsers = React.lazy(() => import("pages/Dashboard/Users/Users"));

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
                  <Projects />
                </React.Suspense>
              }
            />

            <Route
              path="/contact"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Contact />
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
              path="*"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Navigate to="/" />
                </React.Suspense>
              }
            />

            <Route element={<CheckAuth />}>
              <Route
                path="/dashboard"
                element={
                  <React.Suspense fallback={<Loading />}>
                    <Dashboard />
                  </React.Suspense>
                }
              />

              <Route
                path="/dashboard/projects"
                element={
                  <React.Suspense fallback={<Loading />}>
                    <DashProjects />
                  </React.Suspense>
                }
              />

              <Route
                path="/dashboard/users"
                element={
                  <React.Suspense fallback={<Loading />}>
                    <DashUsers />
                  </React.Suspense>
                }
              />
            </Route>
          </Switch>
        </Layout>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;

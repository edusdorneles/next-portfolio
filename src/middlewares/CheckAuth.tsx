import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "providers/AuthContext";
import { api } from "services/API";

const CheckAuth: React.FC = () => {
  const { isAuth, setIsAuth, setError } = useAuthContext();
  const authToken = localStorage.getItem("auth-token");

  api
    .get("/dashboard", {
      headers: {
        Authorization: `Baerer ${authToken}`,
      },
    })
    .then((res) => {
      console.log(res.data.message);
    })
    .catch((err) => {
      setError(err.response.data.message);
      setIsAuth(false);
    });

  return isAuth ? <Outlet /> : <Navigate to="/admin" />;
};

export default CheckAuth;

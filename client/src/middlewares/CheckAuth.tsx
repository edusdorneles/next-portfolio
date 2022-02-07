import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "providers/AuthContext";

const CheckAuth: React.FC = () => {
  const { isAuth } = useAuthContext();
  return isAuth ? <Outlet /> : <Navigate to="/admin" />;
};

export default CheckAuth;

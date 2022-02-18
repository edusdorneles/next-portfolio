import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "providers/AuthContext";

const CheckUserAuth: React.FC = () => {
  const { user } = useAuthContext();
  return user ? <Outlet /> : <Navigate to="/admin" />;
};

export default CheckUserAuth;

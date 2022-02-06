import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckUser: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/admin") {
      if (!localStorage.getItem("auth-token")) {
        navigate("/admin");
      }
    }
  }, [pathname, navigate]);

  return <>{children}</>;
};

export default CheckUser;

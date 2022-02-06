import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "providers/AuthContext";

// Services
import { api } from "services/API";

const CheckUser: React.FC = ({ children }) => {
  const { setError } = useAuthContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/admin") {
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
          navigate("/admin");
        });
    }
  }, [pathname, navigate, setError]);

  return <>{children}</>;
};

export default CheckUser;

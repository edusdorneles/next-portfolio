import { useState, useEffect } from "react";
import TitleDesc from "components/TitleDesc/TitleDesc";
import UserCard from "components/UserCard/UserCard";

// Services
import { api } from "services/API";

// Styles
import { UsersStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { BsPlusLg } from "react-icons/bs";

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>();

  const fetchData = () => {
    const authToken = localStorage.getItem("auth-token");

    api
      .get("/dashboard/users", {
        headers: {
          Authorization: `Baerer ${authToken}`,
        },
      })
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UsersStyle>
      <Container className="users__container">
        <TitleDesc
          title="usuários"
          firstDesc="Aqui você pode editar os usuários que tem acesso à área administrativa"
        />

        <div className="users__cards">
          {users?.map((user: User) => {
            return <UserCard name={user.name} email={user.email} id={user.id} />;
          })}

          <div className="user-cards__new-user">
            <BsPlusLg />
          </div>
        </div>
      </Container>
    </UsersStyle>
  );
};

export default Users;

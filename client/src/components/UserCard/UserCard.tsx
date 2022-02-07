// Styles
import { UserCardStyle } from "./styles";

// Icons
import { MdModeEditOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const UserCard: React.FC<User> = (props) => {
  return (
    <UserCardStyle>
      <div className="user-card__name">
        <p>{props.name}</p>
        <p>{props.email}</p>
      </div>

      <div className="user-card__buttons">
        <button>
          <MdModeEditOutline />
        </button>

        <button>
          <IoClose />
        </button>
      </div>
    </UserCardStyle>
  );
};

export default UserCard;

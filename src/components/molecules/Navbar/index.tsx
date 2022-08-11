import { NavItem } from "components/atoms";
import { FaHome, FaPencilRuler } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Navbar = () => {
    return (
        <div className="flex w-alto items-center content-between">
            <NavItem text="Home" href="/" icon={<FaHome fontSize={20} />} />
            <NavItem text="Projetos" href="/projetos" icon={<FaPencilRuler fontSize={20} />} />
            <NavItem text="Contato" href="/contato" icon={<MdEmail fontSize={20} />} />
        </div>
    );
};

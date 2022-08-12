import { RoundedIcon } from "components/atoms";
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";

export const RoundedIcons = () => {
    return (
        <div className="flex items-center justify-around w-44 mt-3">
            <RoundedIcon
                icon={<FaWhatsapp fontSize={20} />}
                href="https://api.whatsapp.com/send?phone=5551993896982"
                title="Link para o Whatsapp"
            />

            <RoundedIcon
                icon={<FaGithub fontSize={20} />}
                href="https://github.com/dududornelees"
                title="Link para o GitHub"
            />

            <RoundedIcon
                icon={<FaLinkedinIn fontSize={20} />}
                href="https://www.linkedin.com/in/dududornelees/"
                title="Link para o LinkedIn"
            />
        </div>
    );
};

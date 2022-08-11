import { ContactButton } from "components/molecules";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export const ContactButtons = () => {
    return (
        <div className="grid grid-cols-1 gap-3 w-full my-3 md:grid-cols-2">
            <ContactButton href="https://api.whatsapp.com/send?phone=5551993896982" icon={<FaWhatsapp />}>
                Whatsapp
            </ContactButton>

            <ContactButton href="https://www.instagram.com/dududornelees/" icon={<FaInstagram />}>
                Instagram
            </ContactButton>
        </div>
    );
};

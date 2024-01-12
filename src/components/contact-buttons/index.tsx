import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export const ContactButtons = () => {
    return (
        <div className="grid grid-cols-2 gap-5">
            <a
                className="flex w-full items-center justify-center gap-1 rounded-md bg-green-500 py-2 transition-all hover:bg-green-700"
                href="https://wa.me/5551993896982?text=Ol%C3%A1%2C+vim+pelo+seu+portf%C3%B3lio%21"
                target="_blank"
            >
                <FaWhatsapp />
                WhatsApp
            </a>

            <a
                className="flex w-full items-center justify-center gap-1 rounded-md bg-purple-500 py-2 transition-all hover:bg-purple-700"
                href="https://www.instagram.com/dududornelees/"
                target="_blank"
            >
                <FaInstagram />
                Instagram
            </a>

            <a
                className="col-span-2 flex w-full items-center justify-center gap-1 rounded-md bg-blue-500 py-2 transition-all hover:bg-blue-700"
                href="https://www.linkedin.com/in/dududornelees"
                target="_blank"
            >
                <FaLinkedin />
                LinkedIn
            </a>
        </div>
    );
};

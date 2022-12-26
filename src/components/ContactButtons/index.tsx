import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export const ContactButtons = () => {
    return (
        <div className="grid grid-cols-2 gap-5">
            <a
                className="rounded-md w-full transition-all bg-green-500 hover:bg-green-700 py-2 flex justify-center items-center gap-1"
                href="https://wa.me/5551993896982?text=Ol%C3%A1%2C+vim+pelo+seu+portf%C3%B3lio%21"
                target="_blank"
            >
                <FaWhatsapp />
                WhatsApp
            </a>

            <a
                className="rounded-md w-full transition-all bg-purple-500 hover:bg-purple-700 py-2 flex justify-center items-center gap-1"
                href="https://www.instagram.com/dududornelees/"
                target="_blank"
            >
                <FaInstagram />
                Instagram
            </a>

            <a
                className="rounded-md w-full transition-all col-span-2 bg-blue-500 hover:bg-blue-700 py-2 flex justify-center items-center gap-1"
                href="https://www.linkedin.com/in/dududornelees"
                target="_blank"
            >
                <FaLinkedin />
                LinkedIn
            </a>
        </div>
    );
};

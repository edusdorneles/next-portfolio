import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const ContactButtons = () => {
    return (
        <div className="grid grid-cols-2 gap-5">
            <a
                target="_blank"
                href="https://wa.me/5551993896982?text=Ol%C3%A1%2C+vim+pelo+seu+portf%C3%B3lio%21"
                className="flex w-full items-center justify-center gap-1 rounded-md bg-green-500 py-2 transition-all hover:bg-green-600"
            >
                <FaWhatsapp />
                WhatsApp
            </a>

            <a
                target="_blank"
                href="https://www.instagram.com/edusdorneles/"
                className="flex w-full items-center justify-center gap-1 rounded-md bg-purple-500 py-2 transition-all hover:bg-purple-600"
            >
                <FaInstagram />
                Instagram
            </a>

            <a
                target="_blank"
                href="https://www.linkedin.com/in/edusdorneles"
                className="flex w-full items-center justify-center gap-1 rounded-md bg-blue-500 py-2 transition-all hover:bg-blue-600"
            >
                <FaLinkedin />
                LinkedIn
            </a>

            <a
                target="_blank"
                href="https://github.com/edusdorneles"
                className="flex w-full items-center justify-center gap-1 rounded-md bg-slate-600 py-2 transition-all hover:bg-slate-700"
            >
                <FaGithub />
                GitHub
            </a>
        </div>
    );
};

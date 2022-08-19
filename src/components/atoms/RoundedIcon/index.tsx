import { Props } from "./types";

export const RoundedIcon = ({ icon, href, title }: Props) => {
    return (
        <a
            href={href}
            title={title}
            target="_blank"
            className="bg-white-100 rounded-full p-3 cursor-pointer transition-all hover:bg-white-500"
        >
            {icon}
        </a>
    );
};

import React from "react";

type Props = {
    icon: React.ReactNode;
    href: string;
};

export const RoundedIcon = ({ icon, href }: Props) => {
    return (
        <a
            href={href}
            target="_blank"
            className="bg-white-100 rounded-full p-3 cursor-pointer transition-all hover:bg-white-500"
        >
            {icon}
        </a>
    );
};

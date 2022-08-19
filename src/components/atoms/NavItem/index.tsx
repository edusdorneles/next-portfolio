import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Props } from "./types";

export const NavItem = ({ href, icon, text }: Props) => {
    const router = useRouter();
    const [active, setActive] = useState(false);

    const checkIsActive = () => {
        router.pathname === href ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        checkIsActive();
    }, [router.pathname]);

    return (
        <Link href={href} passHref>
            <a
                className={`text-white text-md px-2 h-7 ml-2 flex justify-center items-center rounded-lg transition-all ${
                    active && "bg-secondary hover:bg-secondaryDark"
                }`}
            >
                <div className="block md:hidden">{icon}</div>
                <div className="hidden md:block">{text}</div>
            </a>
        </Link>
    );
};

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
    href: string;
    icon: React.ReactNode;
    text: string;
};

export const NavItem = ({ href, icon, text }: Props) => {
    const router = useRouter();
    const [active, setActive] = useState(false);

    const checkIsActive = () => {
        if (router.pathname === href) {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    useEffect(() => {
        checkIsActive();
    }, [router.pathname]);

    return (
        <Link href={href}>
            <a
                className={`text-white text-md px-2 h-7 ml-2 flex justify-center items-center bg-cyan-800 rounded-lg transition-all ${
                    active && "bg-secondary hover:bg-secondaryDark"
                }`}
            >
                <div className="block md:hidden">{icon}</div>
                <div className="hidden md:block">{text}</div>
            </a>
        </Link>
    );
};

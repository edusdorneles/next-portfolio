import Link from "next/link";
import Image from "next/image";

export const NavLogo = () => {
    return (
        <Link href="/">
            <a className="h-full flex items-center" title="Logo - Eduardo Dorneles">
                <Image src="/images/logo.png" alt="Logo - Eduardo Dorneles" width={30} height={35} />
            </a>
        </Link>
    );
};

import Link from "next/link";
import Image from "next/image";

export const NavLogo = () => {
    return (
        <Link href="/">
            <a className="h-full flex items-center">
                <Image src="/images/logo.png" width={30} height={35} />
            </a>
        </Link>
    );
};

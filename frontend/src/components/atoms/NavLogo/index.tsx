import Link from "next/link";

export const NavLogo = () => {
    return (
        <Link href="/">
            <a>
                <img className="h-9" src="/images/logo.png" />
            </a>
        </Link>
    );
};

import { NavLogo } from "components/atoms";
import { Navbar } from "components/molecules";

export const Header = () => {
    return (
        <header className="bg-primary mb-8">
            <div className="container flex h-16 justify-between items-center">
                <NavLogo />
                <Navbar />
            </div>
        </header>
    );
};

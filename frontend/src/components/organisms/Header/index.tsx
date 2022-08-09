import { NavLogo } from "components/atoms";
import { Navbar } from "components/molecules";

export const Header = () => {
    return (
        <header className="bg-primary mb-8">
            <div className="container mx-auto flex h-16 justify-between items-center px-4 lg:px-64">
                <NavLogo />
                <Navbar />
            </div>
        </header>
    );
};

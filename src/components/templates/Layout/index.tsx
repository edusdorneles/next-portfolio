import { Header, Footer } from "components/organisms";

type Props = {
    children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

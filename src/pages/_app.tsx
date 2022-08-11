import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { Layout } from "components";
import "styles/Global.scss";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
            <ToastContainer
                position="top-center"
                theme="dark"
                autoClose={3000}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Layout>
    );
}

export default MyApp;

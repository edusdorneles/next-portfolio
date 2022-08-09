import { PageTitle } from "components/atoms";

export const Contact = () => {
    return (
        <div className="flex justify-center flex-col items-center">
            <PageTitle className="mb-3" title="contato" />

            <div className="container">
                <p className="text-white text-md font-semibold leading-5 text-center">
                    Ficou interessado e quer entrar em contato?
                </p>

                <p className="text-white text-md font-semibold leading-5 text-center mb-3">
                    Preencha o formulário abaixo, te responderei o mais rápido possível!
                </p>

                <div className="grid grid-cols-1 gap-3 w-full mb-3 md:grid-cols-2">
                    <button className="w-full p-1 bg-secondary rounded-lg text-white transition-all hover:bg-secondaryDark">
                        teste
                    </button>
                    <button className="w-full p-1 bg-secondary rounded-lg text-white transition-all hover:bg-secondaryDark">
                        teste
                    </button>
                </div>

                <form className="grid grid-cols-1 gap-3 w-full">
                    <input
                        type="text"
                        placeholder="Nome:"
                        className="w-full p-1 pl-2 rounded-lg bg-primary border-2 text-white border-gray focus:outline-none focus:ring-2 focus:ring-secondary"
                    />

                    <input
                        type="text"
                        placeholder="Celular:"
                        className="w-full p-1 pl-2 rounded-lg bg-primary border-2 text-white border-gray focus:outline-none focus:ring-2 focus:ring-secondary"
                    />

                    <input
                        type="email"
                        placeholder="Email:"
                        className="w-full p-1 pl-2 rounded-lg bg-primary border-2 text-white border-gray focus:outline-none focus:ring-2 focus:ring-secondary"
                    />

                    <textarea
                        placeholder="Mensagem:"
                        className="w-full p-1 pl-2 h-44 rounded-lg bg-primary border-2 text-white border-gray focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                    />

                    <button
                        type="submit"
                        className="w-full p-1 rounded-lg bg-secondary text-white transition-all hover:bg-secondaryDark"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

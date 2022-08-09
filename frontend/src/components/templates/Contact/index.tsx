import { PageTitle, Text } from "components/atoms";
import { ContactButtons, ContactForm } from "components/organisms";

export const Contact = () => {
    return (
        <div className="flex justify-center flex-col items-center">
            <PageTitle className="mb-3" title="contato" />

            <div className="container">
                <Text>Ficou interessado e quer entrar em contato?</Text>
                <Text>Preencha o formulário abaixo, te responderei o mais rápido possível!</Text>
                <ContactButtons />
                <ContactForm />
            </div>
        </div>
    );
};

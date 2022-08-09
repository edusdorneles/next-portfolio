import { Input, TextArea, Button } from "components/atoms";

export const ContactForm = () => {
    return (
        <form className="grid grid-cols-1 gap-3 w-full">
            <Input type="text" placeholder="Nome:" />
            <Input type="number" placeholder="Celular:" />
            <Input type="email" placeholder="Email:" />
            <TextArea placeholder="Mensagem:" />
            <Button type="submit">Enviar</Button>
        </form>
    );
};

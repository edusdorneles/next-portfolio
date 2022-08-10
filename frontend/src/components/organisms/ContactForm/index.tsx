import { Input, TextArea, Button } from "components/atoms";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-3 w-full">
            <Input
                name="name"
                type="text"
                placeholder="Nome: *"
                register={register}
                required
                error={errors.name && true}
            />

            <Input
                name="cellphone"
                type="number"
                placeholder="Celular: *"
                register={register}
                required
                error={errors.cellphone && true}
            />

            <Input name="email" type="email" placeholder="Email:" register={register} />
            <TextArea name="message" placeholder="Mensagem:" register={register} />
            <Button type="submit">Enviar</Button>
        </form>
    );
};

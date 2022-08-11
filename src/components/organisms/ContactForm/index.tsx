import { Input, TextArea, Button } from "components/atoms";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { contactSchema } from "resolvers";
import { phoneMask } from "helpers";
import { sendEmail } from "services";

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(contactSchema) });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        toast.promise(sendEmail(data), {
            pending: "Enviando email, aguarde!",
            success: "Email enviado!",
            error: "Erro no envio!"
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-3 w-full">
            <Input name="name" type="text" placeholder="Nome: *" register={register} error={errors.name && true} />
            <Input
                name="phone"
                type="tel"
                placeholder="Celular: *"
                register={register}
                error={errors.phone && true}
                maxLength={15}
                onChange={(e: any) => {
                    const { value } = e.target;
                    e.target.value = phoneMask(value);
                }}
            />
            <Input name="email" type="email" placeholder="Email:" register={register} error={errors.email && true} />
            <TextArea name="message" placeholder="Mensagem:" register={register} />
            <Button type="submit">Enviar</Button>
        </form>
    );
};

import { SubmitHandler, FieldValues } from "react-hook-form";

export const sendEmail: SubmitHandler<FieldValues> = async (data) => {
    return await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_USER_ID,
            template_params: {
                email: data.email,
                mensagem: data.message,
                nome: data.name,
                telefone: data.phone
            }
        })
    });
};

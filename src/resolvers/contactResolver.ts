import * as yup from "yup";

export const contactSchema = yup.object({
    name: yup.string().required().max(80),
    phone: yup.string().required().max(15).min(14),
    email: yup.string().email().max(80),
    message: yup.string().max(300)
});

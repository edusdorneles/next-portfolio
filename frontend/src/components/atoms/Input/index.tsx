type Props = {
    register: any;
    name: string;
    required?: boolean;
    type: string;
    placeholder: string;
    error?: boolean;
};

export const Input = ({ register, name, required, type, placeholder, error }: Props) => {
    return (
        <input
            {...register(name, { required })}
            type={type}
            placeholder={placeholder}
            className={`w-full p-1 pl-2 rounded-lg bg-primary border-2 text-white border-gray focus:outline-none focus:ring-2 focus:ring-secondary ${
                error && "border-red"
            }`}
        />
    );
};

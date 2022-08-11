type Props = {
    register: any;
    name: string;
    type: string;
    placeholder: string;
    error?: boolean;
    onChange?: (e: any) => void;
    maxLength?: number;
};

export const Input = ({ register, name, type, placeholder, error, onChange, maxLength }: Props) => {
    return (
        <input
            {...register(name)}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            maxLength={maxLength}
            className={`w-full p-1 pl-2 rounded-lg bg-primary border-2 text-white border-gray focus:outline-none focus:border-secondary ${
                error && "border-red"
            }`}
        />
    );
};

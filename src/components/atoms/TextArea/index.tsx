type Props = {
    register: any;
    name: string;
    placeholder: string;
};

export const TextArea = ({ register, name, placeholder }: Props) => {
    return (
        <textarea
            {...register(name)}
            placeholder={placeholder}
            className="w-full p-1 pl-2 h-44 rounded-lg bg-primary border-2 text-white border-gray focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
        />
    );
};

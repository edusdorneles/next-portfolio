type Props = {
    type: "text" | "number" | "email";
    placeholder: string;
};

export const Input = ({ type, placeholder }: Props) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full p-1 pl-2 rounded-lg bg-primary border-2 text-white border-gray focus:outline-none focus:ring-2 focus:ring-secondary"
        />
    );
};

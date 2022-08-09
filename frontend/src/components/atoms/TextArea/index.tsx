type Props = {
    placeholder: string;
};

export const TextArea = ({ placeholder }: Props) => {
    return (
        <textarea
            placeholder={placeholder}
            className="w-full p-1 pl-2 h-44 rounded-lg bg-primary border-2 text-white border-gray focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
        />
    );
};

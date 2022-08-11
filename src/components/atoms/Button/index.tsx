type Props = {
    type: "submit" | "button";
    children: string;
};

export const Button = ({ type, children }: Props) => {
    return (
        <button
            type={type}
            className="w-full p-1 rounded-lg bg-secondary text-white transition-all hover:bg-secondaryDark"
        >
            {children}
        </button>
    );
};

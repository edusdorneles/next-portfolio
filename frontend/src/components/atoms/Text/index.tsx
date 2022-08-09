type Props = {
    children: string;
    className?: string;
};

export const Text = ({ children, className }: Props) => {
    return <p className={`text-white text-md font-semibold leading-5 text-center ${className}`}>{children}</p>;
};

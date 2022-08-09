type Props = {
    children: string;
};

export const Text = ({ children }: Props) => {
    return <p className="text-white text-md font-semibold leading-5 text-center">{children}</p>;
};

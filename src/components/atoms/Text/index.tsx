import { Props } from "./types";

export const Text = ({ children, className }: Props) => {
    return (
        <p role="paragraph" className={`text-white text-md font-semibold leading-5 text-center ${className}`}>
            {children}
        </p>
    );
};

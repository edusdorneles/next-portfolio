import { Props } from "./types";

export const PageTitle = ({ title, className }: Props) => {
    return (
        <div
            className={`text-white text-md px-2 h-7 w-32 flex justify-center items-center bg-secondary rounded-lg font-semibold  ${className}`}
        >
            {title}
        </div>
    );
};

import * as P from "./props";

export const TitleCard = ({ title }: P.Props) => {
    return <div className="rounded-md bg-primary flex justify-center items-center w-24 px-2 p-1 mb-5">{title}</div>;
};

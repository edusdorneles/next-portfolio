import * as P from "./props";

export const TitleCard = ({ title }: P.Props) => {
    return (
        <div className="mb-5 flex w-24 items-center justify-center rounded-md bg-primary p-1 px-2">
            {title}
        </div>
    );
};

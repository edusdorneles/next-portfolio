import Image from "next/image";
import * as P from "./props";

export const TechCard = ({ tech }: P.Props) => {
    return (
        <div
            className="relative flex cursor-pointer items-center justify-center rounded-md bg-secondary p-5 transition-all hover:bg-secondaryHover"
            title={tech.title}
        >
            <Image src={tech.image} alt={tech.title} width={200} height={200} loading="lazy" />
        </div>
    );
};

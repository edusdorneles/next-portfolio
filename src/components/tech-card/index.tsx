import Image from "next/image";
import * as P from "./props";

export const TechCard = ({ tech }: P.Props) => {
    return (
        <div
            title={tech.title}
            className="relative flex items-center justify-center rounded-md bg-secondary p-5 transition-all hover:bg-secondaryHover"
        >
            <Image src={tech.image} alt={tech.title} width={200} height={200} loading="lazy" />
        </div>
    );
};

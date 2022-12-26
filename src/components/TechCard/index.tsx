import Image from "next/image";
import * as P from "./props";

export const TechCard = ({ tech }: P.Props) => {
    return (
        <div
            className="flex justify-center items-center bg-secondary hover:bg-secondaryHover transition-all rounded-md p-5 relative cursor-pointer"
            title={tech.title}
        >
            <Image src={tech.image} alt={tech.title} width={200} height={200} loading="lazy" />
        </div>
    );
};

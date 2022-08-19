import Image from "next/image";
import { Props } from "./types";

export const RoundedImage = ({ src, alt, width, height, layout, className }: Props) => {
    return (
        <Image
            className={`rounded-full ${className}`}
            src={src}
            alt={alt}
            width={width}
            height={height}
            layout={layout}
        />
    );
};

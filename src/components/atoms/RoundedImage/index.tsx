import Image from "next/image";

type Props = {
    src: string;
    alt: string;
    width: number;
    height: number;
    layout?: "fixed" | "fill" | "intrinsic" | "responsive";
    className?: string;
};

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

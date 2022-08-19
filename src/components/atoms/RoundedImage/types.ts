export type Props = {
    src: string;
    alt: string;
    width: number;
    height: number;
    layout?: "fixed" | "fill" | "intrinsic" | "responsive";
    className?: string;
};
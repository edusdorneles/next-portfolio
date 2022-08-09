import { Text } from "components/atoms";

type Props = {
    href: string;
    icon: React.ReactNode;
    children: string;
};

export const ContactButton = ({ href, icon, children }: Props) => {
    return (
        <a
            href={href}
            target="_blank"
            className="w-full p-1 bg-secondary rounded-lg text-white transition-all flex items-center justify-center hover:bg-secondaryDark"
        >
            {icon}
            <Text className="ml-1">{children}</Text>
        </a>
    );
};

type Props = {
    icon: React.ReactNode;
    href: string;
};

export const ProjectIcon = ({ icon, href }: Props) => {
    return (
        <a href={href} target="_blank" className="text-white p-1 mr-2 rounded-full transition-all hover:bg-white-600">
            {icon}
        </a>
    );
};

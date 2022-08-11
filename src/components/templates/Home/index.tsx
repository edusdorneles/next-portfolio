import { RoundedImage, PageTitle, Text } from "components/atoms";
import { RoundedIcons } from "components/molecules";

export const Home = () => {
    return (
        <div className="flex justify-center flex-col items-center">
            <RoundedImage src="/images/profile.jpg" alt="Foto de perfil - Eduardo Dorneles" width={200} height={200} />
            <PageTitle className="mt-4 mb-3" title="front-end" />
            <Text>Sou desenvolvedor front-end</Text>
            <Text>Utilizo como principal ferramenta de trabalho, o React!</Text>
            <RoundedIcons />
        </div>
    );
};

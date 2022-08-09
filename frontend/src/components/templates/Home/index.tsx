import { RoundedImage } from "components/atoms";
import { PageTitle } from "components/atoms";
import { RoundedIcons } from "components/organisms";

export const Home = () => {
    return (
        <div className="flex justify-center flex-col items-center">
            <RoundedImage src="/images/profile.jpg" alt="Foto de perfil - Eduardo Dorneles" width={200} height={200} />
            <PageTitle className="mt-4 mb-3" title="front-end" />
            <p className="text-white text-md font-semibold leading-5 text-center">Sou desenvolvedor front-end</p>
            <p className="text-white text-md font-semibold leading-5 text-center w-80 md:w-auto">
                Utilizo como principal ferramenta de trabalho, o React!
            </p>
            <RoundedIcons />
        </div>
    );
};

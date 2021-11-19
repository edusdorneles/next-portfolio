// Styles
import { ProjetoCardStyle } from './styles';

// Icons
import { FaGithub } from 'react-icons/fa';
import { VscGlobe } from 'react-icons/vsc';

// Interfaces
interface Props {
    id: number,
    title: string,
    dataInicio: string,
    image: string,
    desc: string,
    differential: string,
    linkGithub: string,
    linkPreview: string
}

const ProjetoCard: React.FC<Props> = (props) => {
    return (
        <ProjetoCardStyle>
            <div className="projeto-card__text">
                <h2 className="projeto-card__text__title">{props.title}</h2>
                <p className="projeto-card__text__data-inicio">{props.dataInicio}</p>
            </div>
            
            <div className="projeto-card__image">
                <img src={props.image} alt={props.title} />
            </div>

            <div className="projeto-card__text">
                <p className="projeto-card__text__desc">{props.desc}</p>
                <p className="projeto-card__text__differential">{props.differential}</p>
            </div>

            <div className="projeto-card__link-buttons">
                <div className="link-buttons__link">
                    <a href={props.linkGithub} target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </div>

                <div className="link-buttons__link">
                    <a href={props.linkPreview} target="_blank" rel="noreferrer">
                        <VscGlobe />
                    </a>
                </div>
            </div>
        </ProjetoCardStyle>
    )
}

export default ProjetoCard;
// Styles
import { TitleDescStyle } from './styles';

// Interface
interface Props {
    title: string,
    firstDesc: string,
    secondDesc: string,
}

const TitleDesc: React.FC<Props> = (props) => {
    return (
        <TitleDescStyle>
            <div className="title-desc__title">
                <h1>{props.title}</h1>
            </div>

            <div className="title-desc__desc">
                <p>{props.firstDesc}</p>
                <p>{props.secondDesc}</p>
            </div>
        </TitleDescStyle>
    )
}

export default TitleDesc;
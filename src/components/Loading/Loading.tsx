// Styles
import { LoadingStyle } from "./styles";

// Loading
import { PropagateLoader } from 'react-spinners'

const Loading = () => {
    return (
        <LoadingStyle>
            <PropagateLoader
                loading={true}
                size={12}
                color={"#0E79B2"}
            />
        </LoadingStyle>
    )
}

export default Loading;
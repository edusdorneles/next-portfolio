import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
    containerCard: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    
    mainCard: {
        width: '80px',
        height: '25px',
        backgroundColor: '#0E79B2',
        borderRadius: '5px',
        lineHeight: '28px',
        textAlign: 'center',
        margin: '15px 0px',
        padding: '0px 12px',
    },

    cardText: {
        color: 'white',
        fontWeight: 'normal',
        fontSizez: '20px',
    },
}));
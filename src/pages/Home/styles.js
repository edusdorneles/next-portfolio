import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
    mainHome: {
        minHeight: '100%',
    },

    containerHome: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '30px',
    },

    divImage: {
        width: '220px',
        height: '220px',
    },

    perfilImage: {
        width: '220px',
        height: '220px',
        borderRadius: '110px',
    },

    divText: {
        textAlign: 'center',
        color: 'white',
        fontSize: '18px',
    },

    divIcons: {
        margin: '15px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconBtn: {
        backgroundColor: 'white !important',
        margin: '0px 10px !important',
        transition: 'all .2s',

        "&:hover": {
            backgroundColor: '#ddd !important',
        }
    },

    icons: {    
        color: 'black !important',
    }
}));
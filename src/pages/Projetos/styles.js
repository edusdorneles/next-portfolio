import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
    mainProjetos: {
        minHeight: '100%',
        marginTop: '30px',
    },

    divText: {
        textAlign: 'center',
        color: 'white',
        fontSize: '18px',

        "&:last-child": {
            marginBottom: '15px',
        },
    },
}));
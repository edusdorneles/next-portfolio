import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
    header: {
        width: '100%',
        height: '70px',
        backgroundColor: '#14141C',
        lineHeight: '76px',
    },

    headerLogo: {
        width: '100%',
        height: '70px',
    },

    headerTitle: {
      color: '#0E79B2',
      fontWeight: '200',
      fontSize: '24px !important',
      textDecoration: 'none',
    },

    headerDorneles: {
        color: 'white',
        fontWeight: '300',
    },

    headerNav: {
        width: '100%',
        height: '70px',
    },

    navUl: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    navLi: {
        listStyle: 'none',
        paddingLeft: '30px'
    },

    navLink: {
        color: 'white',
        fontSize: '18px',
        textDecoration: 'none',
        transition: 'all .2s',

        "&:hover": {
            color: '#0E79B2',
        }
    },

    // Mobile
    headerMobileNav: {
        width: '100%',
        height: '70px',
        lineHeight: '70px'
    },

    mobileNav: {
        width: '100%',
        height: '70px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    menuIcon: {
        color: 'white'
    },
}));
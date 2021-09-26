import React from 'react'
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <p>© 2021 - Eduardo Dorneles</p>
        </footer>
    )
}

export default Footer;
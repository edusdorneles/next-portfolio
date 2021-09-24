import React from 'react'
import { Container } from '@material-ui/core';

import useStyles from './styles';

const Contato = () => {
    const classes = useStyles();

    return (
        <Container className={classes.mainContato}>
            contato
        </Container>
    )
}

export default Contato;
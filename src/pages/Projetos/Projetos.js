import React from 'react'
import { Container } from '@material-ui/core';

import useStyles from './styles';

const Projetos = () => {
    const classes = useStyles();

    return (
        <Container className={classes.mainProjetos}>
            projetos
        </Container>
    )
}

export default Projetos;
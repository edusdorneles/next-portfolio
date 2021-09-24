import React from 'react'
import { Container } from '@material-ui/core';

import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.mainHome}>
            home
        </Container>
    )
}

export default Home;
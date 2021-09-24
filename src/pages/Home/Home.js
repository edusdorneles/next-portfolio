import React from 'react'
import { Container, Box, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Card from '../../components/Card/Card';


import useStyles from './styles';

import Perfil from '../../images/Perfil-Resized.jpg';

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.mainHome}>
            <Box className={classes.containerHome}>
                <Box className={classes.divImage}>
                    <img className={classes.perfilImage} src={Perfil} alt="Foto de perfil: Eduardo Dorneles" />
                </Box>

                <Card title="front-end" />

                <Box>
                    <p className={classes.divText}>Sou desenvolvedor front-end</p>
                    <p className={classes.divText}>Utilizo como principal ferramenta de trabalho, o React!</p>

                    <Box className={classes.divIcons}>
                        <IconButton size="medium" className={classes.iconBtn} href="https://wa.me/+5551993896982" target="_blank">
                            <WhatsAppIcon className={classes.icons} />
                        </IconButton>

                        <IconButton size="medium" className={classes.iconBtn} href="https://github.com/dududornelees" target="_blank">
                            <GitHubIcon className={classes.icons} />
                        </IconButton>

                        <IconButton size="medium" className={classes.iconBtn} href="https://www.linkedin.com/in/dududornelees/" target="_blank">
                            <LinkedInIcon className={classes.icons} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Home;
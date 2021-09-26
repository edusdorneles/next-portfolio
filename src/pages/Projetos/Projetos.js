import React from 'react'
import { Container, Box, Grid } from '@material-ui/core';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Card from '../../components/Card/Card';

import useStyles from './styles';

const Projetos = () => {
    const classes = useStyles();
    const projetos = require('../../api/projetos.json');

    return (
        <Container className={classes.mainProjetos}>
            <Card title="projetos" />

            <Box>
                <p className={classes.divText}>Aqui estão os meus projetos pessoais e profissionais</p>
                <p className={classes.divText}>Disponibilizo tanto o live preview do site, quanto o código, hospedado no Github</p>
            </Box>

            <Grid container spacing={4} className={classes.containerProjetos} >
                { projetos.map(projeto => {
                    return(
                        <Grid item  xs={12} sm={6} md={4} className={classes.projectCard}>
                            <ProjectCard
                                imagem={projeto.imagem}
                                nome={projeto.nome}
                                descricao={projeto.descricao}
                                dataCriado={projeto.dataCriado}
                                linkGit={projeto.linkGit}
                                linkPage={projeto.linkPage}
                            />
                        </Grid>
                    )
                }) }
            </Grid>
        </Container>
    )
}

export default Projetos;
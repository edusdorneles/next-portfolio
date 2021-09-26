import React from 'react'
import { CardHeader, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const ProjectCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer}>
            <CardHeader
                title={props.nome} 
                subheader={props.dataCriado}
                className={classes.cardHeader}
                subheaderTypographyProps={{color: 'white !important'}}
            />
            <CardMedia component="img" height="200" image={props.imagem} alt={props.nome}/>
            <CardContent>
                <Typography variant="body2" color="text.secondary" className={classes.cardDescription}>
                    {props.descricao}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton color="white" href={props.linkGit} target="_blank" aria-label="Open Github">
                    <GitHubIcon />
                </IconButton>
                <IconButton color="white" href={props.linkPage} target="_blank" aria-label="Open Website">
                    <LanguageIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;
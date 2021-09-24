import React from 'react'

import useStyles from './styles';

const Card = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.mainCard}>
            <p className={classes.cardText}>{props.title}</p>
        </div>
    )
}

export default Card;
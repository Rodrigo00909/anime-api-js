import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: 'auto',
        height: 'auto',
        overflow: 'hidden',
    },
    card: {
        width: '90% !important',
        height: '80% !important'
    },
    img: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
}));

const Card = ({ anime }) => {

    const classes = useStyles();

    return (
        <>
            <GridList className={classes.grid}>
                <GridListTile className={classes.card}>
                    <img src={anime.image_url} alt="Anime image" />
                    <GridListTileBar title={anime.title} />
                </GridListTile>
            </GridList>
        </>
    )
}

export default Card;

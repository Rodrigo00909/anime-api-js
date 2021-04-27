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
        width: '100% !important',
        height: '100% !important',
        marginBottom: '40px',
        borderLeft: '2px #000',
        boxShadow: '6px 6px 20px rgba(122, 122, 122, 0.212)',
    },
    img: {
        width: '60%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderLeft: '7px solid #7b76806e',
    },
    textBg: {
        margin: '0 auto',
        width: '60%',
        borderLeft: '7px solid #7b76806e',
    }
}));

const Card = ({ anime }) => {

    const classes = useStyles();

    return (
        <>
            <GridList className={classes.grid}>
                <GridListTile className={classes.card}>
                    <img className={classes.img} src={anime.image_url} alt="Anime image" />
                    <GridListTileBar className={classes.textBg} title={anime.title} />
                </GridListTile>
            </GridList>
        </>
    )
}

export default Card;

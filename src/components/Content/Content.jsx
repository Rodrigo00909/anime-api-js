import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: 'auto',
        height: 'auto',
    },
    mainContent: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    sidebar: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    img: {
        width: '150px',
        height: '150px'
    },
}));


function Content({ topAnimes, favoriteAnimes }) {

    const classes = useStyles();

    return (
        <>
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <h3>Animes Esperados</h3>
                            {favoriteAnimes.map(anime => (
                                <Grid item xs={6} sm={6} className={classes.mainContent}>
                                    <Grid item xs={12} sm={12}>
                                        <div><img className={classes.img} src={anime.image_url} alt="" /></div>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <a href={anime.url} key={anime.mal_id} target="_blank" rel="noreferrer">{anime.title}</a>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <h3>Animes Populares de siempre</h3>
                            {topAnimes.map(anime => (
                                <div className={classes.sidebar} >
                                    <Grid item>
                                        <div><img className={classes.img} src={anime.image_url} alt="" /></div>
                                    </Grid>
                                    <Grid item>
                                        <a href={anime.url} key={anime.mal_id} target="_blank" rel="noreferrer">{anime.title}</a>
                                    </Grid>
                                </div>
                            ))}
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </>
    );
}

export default Content;
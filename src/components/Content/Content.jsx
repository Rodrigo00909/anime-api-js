import React from 'react';

import Card from '../Card/Card';

import { makeStyles, fade } from '@material-ui/core/styles';
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
    searchDiv: {
        textAlign: 'center',
        margin: '20px 0 20px 0',
        margin: '0 auto',
        marginTop: '30px',
    },
    searchInput: {
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid #9e9e9e',
        borderTop: '1px solid #9e9e9e',
        borderRadius: '0',
        outline: 'none',
        height: '3rem',
        width: '300px',
        fontSize: '16px',
        textAlign: 'center',
        marginBottom: '30px',
        marginTop: '10px',
        "&:focus": {
            borderBottom: '1px solid #4d57e4',
            borderTop: '1px solid #4d57e4',
        }
    },
    gridList: {
        width: 'auto',
        height: 'auto',
    },
    mainTitle: {
        textAlign: 'center',
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
    card: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)'
    },
}));



function Content({ topAnimes, favoriteAnimes, HandleSearch, search, SetSearch, anime }) {

    const classes = useStyles();

    return (
        <>
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                    <Grid item xs={12}>
                        <div className={classes.searchDiv}>
                            <h2>Use these for search our anime!</h2>
                            <form onSubmit={HandleSearch}>
                                <input className={classes.searchInput} type="search" placeholder="Search..." required value={search} onChange={e => SetSearch(e.target.value)} />
                            </form>
                            <div className={classes.card}>
                                {anime.map(anime => (
                                    <Card anime={anime} key={anime.mal_id} />
                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <h3 className={classes.mainTitle}>Animes Esperados</h3>
                            <Grid container>
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
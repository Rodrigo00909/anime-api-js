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
        borderRadius: '0',
        outline: 'none',
        height: '3rem',
        width: '300px',
        fontSize: '16px',
        textAlign: 'center',
        marginBottom: '45px',
        transition: '0.4s ease',
        "&:focus": {
            borderBottom: '1px solid #4d57e4',
            width: '400px',
        }
    },
    searchLine: {
        borderBottom: '1px solid #dfdfdf',
        margin: '0 auto',
        marginTop: '30px',
        marginBottom: '30px',
        width: '70%'
    },
    gridList: {
        width: 'auto',
        height: 'auto',
    },
    mainTitle: {
        textAlign: 'center',
        marginBottom: '45px',
        textShadow: '#9a9898 6px 6px 8px',
        textTransform: 'uppercase',
        color: '#3c3a3a',
    },

    mainContent: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        textAlign: 'center',
        marginBottom: '20px',
    },
    sidebar: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    imgE: {
        width: '95%',
        height: '70%',
        borderRadius: '2rem',
        borderBottomRightRadius: 'inherit',
        borderBottomLeftRadius: 'inherit'
    },
    imgD: {

    },
    textEDiv: {
        padding: '10px 0 20px 0'
    },
    textE: {
        textShadow: '0 0 #523232',
        textDecoration: 'none',
        color: '#4c4a4a',
        fontSize: '18px',
    },
    card: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)'
    },
    cardBg: {
        with: '100%',
        borderRadius: '2rem',
        zIndex: '2',
        backdropFilter: 'blur(2rem)',
        boxShadow: '6px 6px 20px rgba(122, 122, 122, 0.212)',
        background: 'linear-gradient(to right top, #f9f9f973, #c1c1c191)',
        margin: '0 15px 15px 15px',
    }
}));



function Content({ topAnimes, favoriteAnimes, HandleSearch, search, SetSearch, anime }) {

    const classes = useStyles();

    return (
        <>
            <Container maxWidth="xl">


                <div className={classes.searchDiv}>
                    <h2 className={classes.mainTitle}>Use these for search our anime!</h2>
                    <form onSubmit={HandleSearch}>
                        <input className={classes.searchInput} type="search" placeholder="Search..." required value={search} onChange={e => SetSearch(e.target.value)} />
                    </form>
                    <div className={classes.card}>
                        {anime.map(anime => (
                            <Card anime={anime} key={anime.mal_id} />
                        ))}
                    </div>
                </div>
                <div className={classes.searchLine}></div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} sm={12}>
                        <h3 className={classes.mainTitle}>Animes Esperados</h3>
                        <Grid container>
                            {favoriteAnimes.map(anime => (
                                <Grid item xs={12} sm={4} className={classes.mainContent}>
                                    <div className={classes.cardBg}>
                                        <Grid item xs={12} sm={12}>
                                            <div><img className={classes.imgE} src={anime.image_url} alt="" /></div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} className={classes.textEDiv} >
                                            <a className={classes.textE} href={anime.url} key={anime.mal_id} target="_blank" rel="noreferrer">{anime.title}</a>
                                        </Grid>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                        <h3 className={classes.mainTitle} >Animes Populares de siempre</h3>
                        {topAnimes.map(anime => (
                            <div className={classes.sidebar} >
                                <Grid item>
                                    <div><img className={classes.imgD} src={anime.image_url} alt="" /></div>
                                </Grid>
                                <Grid item>
                                    <a href={anime.url} key={anime.mal_id} target="_blank" rel="noreferrer">{anime.title}</a>
                                </Grid>
                            </div>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Content;
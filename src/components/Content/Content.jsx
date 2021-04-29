import React from 'react';

import Card from '../Card/Card';

import { makeStyles, fade } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
        transition: '1s ease',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    sidebar: {
        display: 'grid',
        width: '50%',
        gridTemplateColumns: 'max-content',
        marginBottom: '20px',
        textAlign: 'center',
    },
    imgE: {
        width: '95%',
        height: '70%',
        borderRadius: '2rem',
        borderBottomRightRadius: 'inherit',
        borderBottomLeftRadius: 'inherit',
    },
    imgD: {
        width: '50%',
        paddingLeft: '50px',
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
    textD: {
        textDecoration: 'none',
        color: '#4c4a4a',
        '&:hover': {
            color: '#3487d4',
            transform: 'scale(1.1)',
        }
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
            {/*       <Container maxWidth="xl"></Container> */}
            <div className={classes.searchDiv}>
                <h2 className={classes.mainTitle}>Use these for search our anime!</h2>
                <form onSubmit={HandleSearch}>
                    <input className={classes.searchInput} type="search" placeholder="Search..." required value={search} onChange={e => SetSearch(e.target.value)} />
                </form>
                <div className="cardsSearch">
                    {anime.map(anime => (
                        <Card anime={anime} key={anime.mal_id} />
                    ))}
                </div>
            </div>
            <div className={classes.searchLine}></div>
            <Grid container justify="space-evenly" alignItems="stretch" spacing={3}>
                <Grid item xs={12} md={8} sm={12}>
                    <h3 className={classes.mainTitle}>Most Anticipated Anime</h3>
                    <Grid container>
                        {favoriteAnimes.map(anime => (
                            <Grid item xs={12} sm={4} md={4} className={classes.mainContent}>
                                <div className={classes.cardBg}>
                                    <a href={anime.url} target="_blank" >
                                        <Grid item xs={12} sm={12}>
                                            <div><img className={classes.imgE} src={anime.image_url} alt="" /></div>
                                        </Grid>
                                    </a>
                                    <Grid item xs={12} sm={12} className={classes.textEDiv} >
                                        <a className={classes.textE} href={anime.url} key={anime.mal_id} target="_blank" rel="noreferrer">{anime.title}</a>
                                    </Grid>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item md={2} sm={4}>
                    <div className="titleD"><h3 className={classes.mainTitle}>Popular Anime</h3></div>
                    <div className="cardD">
                        {topAnimes.map(anime => (
                            <div className={classes.sidebar} >
                                <Grid item>
                                    <div><img className={classes.imgD} src={anime.image_url} alt="" /></div>
                                </Grid>
                                <Grid item>
                                    <a className={classes.textD} href={anime.url} key={anime.mal_id} target="_blank" rel="noreferrer">{anime.title}</a>
                                </Grid>
                            </div>
                        ))}
                    </div>
                </Grid>
            </Grid>

        </>
    );
}

export default Content;
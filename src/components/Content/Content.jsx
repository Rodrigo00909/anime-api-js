import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#2d3338'
    },
}));


function Content(topAnimes) {

    const classes = useStyles();

    return (
        <>
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <Paper className={classes.paper}>xs=12 sm=6</Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <h3>Animes Destacados</h3>
                            <a href="#" target="_blank" rel="noreferrer">Shingeki No Kyojin</a>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </>
    );
}

export default Content;
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Logo from '../../assets/img/footerimg.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        textAlign: 'center',
    },
    logo: {
        height: '130px',
        fontSize: '200px',
    },
    textGrid: {
        padding: '20px 20px 20px 50px !important'
    },
    logoGrid: {
        padding: '80px 20px 0px 0px !important'
    },
    author: {
        color: '#d06767',
        fontSize: '20px',
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Container>
                            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                                <Grid className={classes.textGrid} item xs={6} sm={3}>
                                    <img className={classes.logo} src={Logo} alt="Eren - Mikasa" />
                                </Grid>
                                <Grid className={classes.logoGrid} item xs={6} sm={9}>
                                    <h4>Made with Love for <span className={classes.author}>Dario Rodrigo Torres</span> using ReactJS</h4>
                                </Grid>
                            </Grid>
                        </Container>

                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Footer

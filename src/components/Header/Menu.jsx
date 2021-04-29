import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../../assets/img/AnimeApi.png';

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
}));

export default function Menu() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <img className={classes.logo} src={Logo} alt="Anime Api" />
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
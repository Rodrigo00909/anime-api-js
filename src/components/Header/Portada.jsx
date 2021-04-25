import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Snk from '../../assets/img/snk_1366_521.jpeg';

const useStyles = makeStyles({
    img: {
        width: '100%',
    },
});

const Portada = () => {
    const classes = useStyles();
    return (
        <>
            <img src={Snk} className={classes.img} alt="Shingeki No Kyojin Portada" />
        </>
    )
}

export default Portada

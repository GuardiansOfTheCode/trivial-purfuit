import {Box, Grid} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';
import './CakeSlice.css';

const CakeSlice = (props: any) => {
    const slice1: any = props.cakeSlice1 ?
        <Grid item xs={3}>
            <Box className={'CakeSlice CakeSlice1'}/>
        </Grid> : '';
    const slice2: any = props.cakeSlice2 ?
        <Grid item xs={3}>
            <Box className={'CakeSlice CakeSlice2'}/>
        </Grid> : '';
    const slice3: any = props.cakeSlice3 ?
        <Grid item xs={3}>
            <Box className={'CakeSlice CakeSlice3'}/>
        </Grid> : '';
    const slice4: any = props.cakeSlice4 ?
        <Grid item xs={3}>
            <Box className={'CakeSlice CakeSlice4'}/>
        </Grid> : '';

    return (
        <Grid container direction={'row'}>
            {slice1}
            {slice2}
            {slice3}
            {slice4}
        </Grid>
    );
}

CakeSlice.propTypes = {
    cakeSlice1: propTypes.bool,
    cakeSlice2: propTypes.bool,
    cakeSlice3: propTypes.bool,
    cakeSlice4: propTypes.bool,
}

export default CakeSlice;

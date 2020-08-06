import {Button, Grid} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';

const Question = (props: any) => {
    return (
        <Grid container
              justify={'center'}>
            <h3>Edit Questions</h3>
            <Grid item xs={12}>
                <Button variant={'contained'} onClick={props.onClickFetchAll}>
                    Test Fetch All Questions
                </Button>
                <Button variant={'contained'} onClick={props.onClickFetchRandomCard}>
                    Test Fetch Random Question
                </Button>
                <Button variant={'contained'} onClick={props.onClickAddQuestion}>
                    Test Add Question
                </Button>
                <Button variant={'contained'} onClick={props.onClickDeleteQuestion}>
                    Test Delete Question
                </Button>
                <Button variant={'contained'} onClick={props.onClickUpdateCard}>
                    Test Update Question
                </Button>
                <Button variant={'contained'} onClick={props.onClickResetDb}>
                    Test Reset Database Tables
                </Button>
            </Grid>
        </Grid>
    );
};

Question.propTypes = {
    onClickAddQuestion: propTypes.func
}

export default Question;

import {Button, Grid, TextField} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';

const Question = (props: any) => {
    return (
        <Grid container
              justify={'center'}
              spacing={1}>
            <Grid item xs={12}>
                <form onSubmit={props.onClickAddQuestion}>
                    <TextField
                        id={'addQuestion'}
                        label={'New Question'}
                        multiline
                        variant={'outlined'}
                        onChange={props.questionChange}/>
                        <Button variant={'contained'} type={'submit'}>
                            Add Question
                        </Button>
                </form>
            </Grid>

            <Grid item xs={12}>
                <Button variant={'contained'} onClick={props.onClickFetchAll}>
                    Test Fetch All Questions
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant={'contained'} onClick={props.onClickResetDb}>
                    Test Reset Database Tables
                </Button>
            </Grid>
        </Grid>
    );
};

Question.propTypes = {
    questionChange: propTypes.func,
    onClickAddQuestion: propTypes.func,
    onClickUpdateCard: propTypes.func
}

export default Question;

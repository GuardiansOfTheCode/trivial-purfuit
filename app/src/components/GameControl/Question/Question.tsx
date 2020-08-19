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
                        placeholder={'INT.STR.STR.STR.STR'}
                        multiline
                        variant={'outlined'}
                        onChange={props.addQuestionChange}/>
                        <Button variant={'contained'}
                                type={'submit'}>
                            Add Question
                        </Button>
                </form>
            </Grid>

            <Grid item xs={12}>
                <form onSubmit={props.onClickUpdateQuestion}>
                    <TextField
                        id={'updateQuestion'}
                        label={'Update Question'}
                        placeholder={'INT.INT.STR.STR.STR.STR'}
                        multiline
                        variant={'outlined'}
                        onChange={props.updateQuestionChange}/>
                    <Button variant={'contained'}
                            type={'submit'}>
                        Update Question
                    </Button>
                </form>
            </Grid>

            <Grid item xs={12}>
                <form onSubmit={props.onClickDeleteQuestion}>
                    <TextField
                        id={'deleteQuestion'}
                        label={'Delete Question'}
                        placeholder={'Enter Question ID'}
                        multiline
                        variant={'outlined'}
                        onChange={props.deleteQuestionIDChange}/>
                    <Button variant={'contained'}
                            type={'submit'}>
                        Delete Question
                    </Button>
                </form>
            </Grid>

            <Grid item xs={12}>
                <Button variant={'contained'}
                        onClick={props.handleOpenFetchAllModal}>
                    View All Questions
                </Button>
            </Grid>

            <Grid item xs={12}>
                <Button variant={'contained'}
                        onClick={props.onClickResetDb}>
                    Reset Database Tables
                </Button>
            </Grid>
        </Grid>
    );
};

Question.propTypes = {
    // currentQuestion: propTypes.any,
    addQuestionChange: propTypes.func,
    updateQuestionChange: propTypes.func,
    deleteQuestionIDChange: propTypes.func,
    onClickAddQuestion: propTypes.func,
    onClickUpdateQuestion: propTypes.func,
    handleOpenFetchAllModal: propTypes.func,
    handleCloseFetchAllModal: propTypes.func
}

export default Question;

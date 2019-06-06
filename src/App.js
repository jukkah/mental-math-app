import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Numpad from './Numpad';
import Field from './Field';

export const App = ({ equation, answer, valid, updateAnswer, newFormula }) => (
    <div className="page">
        <Field onClick={useCallback((e) => e.detail === 3 && newFormula(), [newFormula])}>
            {equation}
        </Field>
        <Field className={valid ? '' : 'error'}>
            {answer}
        </Field>
        <Numpad onChange={updateAnswer}/>
    </div>
);

const mapState = ({ store: { equation, answer, valid } }) => ({
    equation,
    answer,
    valid,
});

const mapDispatch = ({ store: { updateAnswerAsync, newFormulaAsync } }) => ({
    updateAnswer: updateAnswerAsync,
    newFormula: newFormulaAsync
});

const AppContainer = connect(mapState, mapDispatch)(App);

export default AppContainer;

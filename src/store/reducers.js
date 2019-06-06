import { assignNumbers, evaluate } from './calculator';

export const setFormula = (state, formula) => resetEquation({
    ...state,
    formula,
});

export const resetEquation = (state) => resetCorrectAnswer({
    ...state,
    equation: assignNumbers(state.formula),
});

export const updateAnswer = (state, action) => action === 'clear'
    ? resetAnswer(state)
    : setAnswer(state, state.answer + action);

export const clearAnswer = (state) => ({
    ...state,
    answer: '',
});

const resetCorrectAnswer = (state) => resetAnswer({
    ...state,
    correctAnswer: evaluate(state.equation),
});

const resetAnswer = (state) => resetValid(clearAnswer(state));

const resetValid = (state) => ({
    ...state,
    valid: true,
});

const setAnswer = (state, answer) => validateAnswer({
    ...state,
    answer,
});

const validateAnswer = (state) => ({
    ...state,
    valid: state.answer === state.correctAnswer || state.answer.length < state.correctAnswer.length,
});

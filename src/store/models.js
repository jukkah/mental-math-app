import { clearAnswer, resetEquation, setFormula, updateAnswer } from './reducers';

export const store = {
    state: setFormula({}, '#'),

    reducers: {
        clearAnswer(state) {
            return clearAnswer(state);
        },

        updateAnswer(state, value) {
            return updateAnswer(state, value);
        },

        newEquation(state) {
            return resetEquation(state);
        },

        newFormula(state, formula) {
            return setFormula(state, formula);
        }
    },

    effects: (dispatch) => ({
        async updateAnswerAsync(value, rootState) {
            await dispatch.store.updateAnswer(value);

            if (isInvalidAnswer(rootState.store, value)) {
                await sleep(300);
                await dispatch.store.clearAnswer();
            } else if (isValidAnswer(rootState.store, value)) {
                await sleep(200);
                await dispatch.store.newEquation();
            }
        },

        newFormulaAsync(state) {
            const formula = prompt('Type new formula (# is digit placeholder)');
            if (formula) {
                dispatch.store.newFormula(formula);
            }
        }
    }),
};

function isValidAnswer(state, value) {
    const newState = updateAnswer(state, value);
    return newState.answer === newState.correctAnswer;
}

function isInvalidAnswer(state, value) {
    const newState = updateAnswer(state, value);
    return !newState.valid;
}

function sleep(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

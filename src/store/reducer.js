import * as actionTypes from './actions';

const initialState = {
    isNorthernHemisphere: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_HEMISPHERE:
            return {
                ...state,
                isNorthernHemisphere: !state.isNorthernHemisphere
            }
        default:
            return state;
    }
};

export default reducer;
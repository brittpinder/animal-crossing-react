import * as actionTypes from './actions';

const initialState = {
    hemisphere: 'North'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_HEMISPHERE:
            return {
                ...state,
                hemisphere: state.hemisphere === 'North' ? 'South' : 'North'
            }
        default:
            return state;
    }
};

export default reducer;
import PropTypes from 'react-proptypes';
import * as types from './const';

const initialState = {
    loading: false,
    isAuthorized: false,
    user: null,
    signInError: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOADING :
            return {
                ...state,
                loading: action.payload
            }

        case types.AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthorized: true,
                signInError: null
            }

        case types.AUTH_FAIL:
            return {
                ...state,
                signInError: action.payload,
                isAuthorized: false,
                user: null
            }

        default:
            return state;
    }
}

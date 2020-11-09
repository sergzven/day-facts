import * as types from "./const";
import { toast } from "react-toastify";

import {signIn, signUp} from "../../../services/firebase";
import {errorHandler} from "../../../helpers/helpers";

export const setLoading = payload => ({
    type: types.LOADING,
    payload
})

export const signInAction = (email, password) => async dispatch => {
    dispatch(setLoading(true));

    return await signIn(email, password)
        .then(response => {
            console.log('response', response);
            dispatch(setLoading(false));
            dispatch(
                {
                    type: types.AUTH_SUCCESS,
                    payload: {
                        uid: response?.user?.uid,
                        email: response?.user?.email,
                        emailVerified: response?.user?.emailVerified,
                        refreshToken: response?.user?.refreshToken
                    }
                }
            )
        })
        .catch(error => {
            dispatch(setLoading(false));
            dispatch({
                type: types.AUTH_FAIL,
                payload: {
                    message: error.message
                }
            });
            toast.error(error.message);
        })
}

export const signUpAction = (email, password) => async dispatch => {
    dispatch(setLoading(true));

    return await signUp(email, password)
        .then(response => {
            console.log('response', response);
            dispatch(setLoading(false));
            dispatch(
                {
                    type: types.AUTH_SUCCESS,
                    payload: {
                        uid: response?.user?.uid,
                        email: response?.user?.email,
                        emailVerified: response?.user?.emailVerified,
                        refreshToken: response?.user?.refreshToken
                    }
                }
            )
        })
        .catch(error => {
            dispatch(setLoading(false));
            dispatch({
                type: types.AUTH_FAIL,
                payload: {
                    message: error.message
                }
            });
            toast.error(error.message);
        })
}

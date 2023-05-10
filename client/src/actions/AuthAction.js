import * as AuthApi from '../api/AuthRequest.js';

export const loginIn = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" });

    try {
        const { data } = await AuthApi.loginIn(formData);

        dispatch({ type: "AUTH_SUCCESS", data: data });
    } catch (error) {
        console.log(error);

        dispatch({ type: "AUTH_FAIL" });
    };
};

export const signUp = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" });

    try {
        const { data } = await AuthApi.signUp(formData);
        //console.log(data);
        dispatch({ type: "AUTH_SUCCESS", data: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "AUTH_FAIL" });
    };
};

export const logout = () => async (dispatch) => {
    dispatch({ type: "LOGOUT" });
};
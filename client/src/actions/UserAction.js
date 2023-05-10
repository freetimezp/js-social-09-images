import * as UserApi from '../api/UserRequest';

export const updateUser = (id, formData) => async (dispatch) => {
    dispatch({ type: "UPDATE_START" });

    try {
        const { data } = await UserApi.updateUser(id, formData);
        dispatch({ type: "UPDATE_SUCCESS", data: data });
    } catch (error) {
        console.log("User action error!");
        //console.log(error);
        dispatch({ type: "UPDATE_FAIL" });
    }
};
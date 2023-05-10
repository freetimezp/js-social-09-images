import * as PostApi from '../api/PostRequest.js';

export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" });

    try {
        const { data } = await PostApi.getTimelinePosts(id);
        if (data) {
            dispatch({ type: "RETREIVING_SUCCESS", data: data });
        }
    } catch (error) {
        console.log("Post action error");
        //console.log(error);
        dispatch({ type: "RETREIVING_FAIL" });
    }
};
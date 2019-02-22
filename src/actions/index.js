import { SET_USER_DATA, SET_POST_DATA } from "../constants/constants";

export const setUser = (users) => (
    {
        type: SET_USER_DATA,
        payload: users,
        isLoaded:false
    }
)
export const setPosts = (posts) => (
    {
        type: SET_POST_DATA,
        payload: posts,
        isLoaded:false
    }
)
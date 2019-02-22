import { SET_POST_DATA } from "../constants/constants";

const initialState = {
    posts:[],
    isLoaded:false
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST_DATA:
            return {
                ...state,
                posts:action.payload,
                isLoaded:true
            }
        default:
            return state
    }
}
import { SET_USER_DATA } from "../constants/constants";

const initialState = {
    users:[],
    isLoaded:false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                users:action.payload,
                isLoaded:true
            }
        default:
            return state
    }
}
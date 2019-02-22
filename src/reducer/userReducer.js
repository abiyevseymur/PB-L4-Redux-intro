import { SET_USER_DATA,REMOVE_DATA } from "../constants/constants";

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
        case REMOVE_DATA:
            return{
                ...state,
                users:  state.users.filter(s => s.id !== action.payload)
            }
        default:
            return state
    }
}
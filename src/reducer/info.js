const initialState = {
    user: {}
}
export default function userInfo(state = initialState, action) {
    switch (action.type) {
        case "SET_USER_DATA":
            return { ...state, user: action.payload }
        default:
            return state;
    }
}
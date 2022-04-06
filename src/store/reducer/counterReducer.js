import { ADD, REMOVE, LOADING } from "../action/actionType";


const initialState = {
    loading: false,
    count: 0
}


const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }

        case ADD:
            return {
                ...state,
                count: action.payload?.count || 0,
                loading: false
            }

        case REMOVE:
            return {
                ...state,
                count: action.payload?.count || 0,
                loading: false
            }

        default:
            return state
    }
}



export default reducer
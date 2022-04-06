import { ADD, LOADING, REMOVE } from "./actionType"


// action creator: ADD
export const handleAdd = count => async dispatch => {
    const action = {
        type: ADD,
        payload: { count: count }
    }
    dispatch({type: LOADING})
    setTimeout(() => {
        dispatch(action)
    }, 1000);
}


// action creator: REMOVE
export const handleRemove = count => async dispatch => {
    const action = {
        type: REMOVE,
        payload: { count: count }
    }
    dispatch({type: LOADING})
    setTimeout(() => {
        dispatch(action)
    }, 1000);
}


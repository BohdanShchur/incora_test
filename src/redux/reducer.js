import * as types from './types'

const initionalState = {
    users: [],
    posts: [],
    comments: [],
    error: false
}

export const Reducer = (state = initionalState, action)=>{
    switch(action.type){
        case types.GET_USERS:
            return {...state, users : action.payload}
        case types.GET_POSTS:
            return {...state, posts : action.payload}    
        case types.GET_COMMENTS:
            return {...state, comments : action.payload} 
        case types.ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}
import * as types from './types'

export function getUsers (dispatch) {
    return () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=> res.json())
            .then(result=>{
                dispatch({
                    type: types.GET_USERS,
                    payload: result
                })
            })
            .catch(error=>{
                dispatch({
                    type: types.ERROR,
                    payload: error
                })
            })
    }
}

export function getPosts (id) {
    return dispatch => {
        fetch( `https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res=> res.json())
            .then(result=>{
                console.log(result);
                dispatch({
                    type: types.GET_POSTS,
                    payload: result
                })
            })
            .catch(error=>{
                dispatch({
                    type: types.ERROR,
                    payload: error
                })
            })
    }
}

export function getComments (id) {
    return dispatch => {
        fetch( `https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res=> res.json())
            .then(result=>{
                dispatch({
                    type: types.GET_COMMENTS,
                    payload: result
                })
            })
            .catch(error=>{
                dispatch({
                    type: types.ERROR,
                    payload: error
                })
            })
    }
}


export function setPost (data) {
    return dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result => dispatch({
            type: types.SET_POST,
            payload: result
        }))
        .catch(error=>{
            dispatch({
                type: types.ERROR,
                payload: error
            })
        })
    }
}

export function deletePost (id) {
    return dispatch =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
        {
            method: 'DELETE',
        })
        .catch(error=>{
            dispatch({
                type: types.ERROR,
                payload: error
            })
        })
    }
}

export function putPost (data) {
    return dispatch =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result=>{
            dispatch({
                type: types.PUT_POST,
                payload: result
            })
        })
        .catch(error=>{
            dispatch({
                type: types.ERROR,
                payload: error
            })
        })
    }
}
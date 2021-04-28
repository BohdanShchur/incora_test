import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddPost } from '../components/AddPost'
import { Loading } from '../components/Loading'
import { getComments } from '../redux/action'

export const Posts = ({match})=> {
    const posts = useSelector(state=>state.posts)
    const dispatch = useDispatch()
    const { userId } = match.params
    const [show, setState] = useState(false)

    const showModal = ()=>{
        setState(!show)
    }

    if(posts.length === 0)
        return(
            <Loading />
        )
    
    if(show){
        return <AddPost showModal={showModal} userId={userId} />
    }
  return (
    <div className="row">
      <div className="container">
        <h1>Posts</h1>
        <div className="row">
          <div className="col d-flex justify-content-between align-items-center">
            <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page">
                            <Link to="/user">User</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to="/posts">Posts</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{userId}</li>
                    </ol>
                </nav>
            </div>
            <div>
                <button className="btn btn-success"
                 onClick={showModal}>
                     Add new
                </button>
            </div>
        </div>
        <div className="row">
            <div className="col col-12">
                <ol className="list-group list-group-numbered">
                    {posts.map(data=>{
                        return (
                            <li key={data.id} 
                                className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-text">{data.body}</p>
                                </div>
                                <Link to={`/post/${data.id}`}>
                                    <button className="btn btn-primary"
                                     onClick={()=>dispatch(getComments(data.id))}>
                                         Detail
                                    </button>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
      </div>
    </div>
  );
}



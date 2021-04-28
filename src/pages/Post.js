import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { ChangePost } from '../components/ChangePost';
import { deletePost } from '../redux/action';

export const Post = ({match})=> {
  const { postId } = match.params
  const comments = useSelector(state=>state.comments)
  const data = useSelector(state=>state.posts)
  const dispatch = useDispatch()
  const [show, setState] = useState(false)

  const showModal = ()=>{
      setState(!show)
  }

  const info = data.filter(elem=>elem.id == postId)

  const removePost = ()=>{
    let conf = window.confirm("Do You Want to Delete Post?")
    if(conf){
      dispatch(deletePost(postId))
    }
  }

  if(show){
    return <ChangePost showModal={showModal} post={info} />
  }

  if(!comments){
      return(
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page">
                            <Link to="/user">User</Link>
                        </li>
                    <li className="breadcrumb-item active" aria-current="page">List of Users</li>
                </ol>
            </nav>
            <div className="d-flex justify-content-center align-items-center">
                <span className="spinner-border" role="status"></span>
            </div>
        </div>
    )

  }

  return (
    <div className="row">
      <div className="container">
      <div className="row">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to="/user">User</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Post</li>
                </ol>
            </nav>
      </div>
      <div className="row">
      <div className="card-title">
          <h2>Post</h2>
      </div>
      <div className="card-body">
         <h5 className="card-title">{info[0].title}</h5>
         <p className="card-text">{info[0].body}</p>
      </div>
      <Link to="/posts">
        <button className="btn btn-outline-danger" onClick={removePost}>Delete</button>
      </Link>
        <button className="btn btn-outline-secondary" onClick={showModal}>Put</button>
      </div>
      <div className="row">
        <h1>Comments</h1>
          <ul>
            {comments.map(comment=>{
              return(
                <li key={comment.id}>
                  <div className="card-body">
                    <h4>{comment.name}</h4>
                    <p>{comment.body}</p>
                    <p>{comment.email}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosts } from '../redux/action'
import { Loading } from './Loading'

export const UserList = ()=> {
    const users = useSelector(state=>state.users)
    const dispatch = useDispatch()

    const Table = ({data})=>{
        return (
                <li key={data.id} 
                    onClick={()=>dispatch(getPosts(data.id))}
                    className="list-group-item d-flex justify-content-between align-items-center">
                    <Link to={`/posts/${data.id}`} >
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">{data.username}</p>
                            <p className="card-text">{data.email}</p>
                        </div>
                    </Link>
                </li>
        )
    }
    const Breadcrumb = () =>{
        return(
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to="/user">User</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">List of Users</li>
                </ol>
            </nav>
        )
    }

    if(!users){
        return(
            <div className="container">
                <Breadcrumb />
                <Loading />
            </div>
            
            
        )
    }
    
    return (
    <div className="row">
        <div className="container">
        <h1>Users List</h1>
        <hr/>
        <div className="row">
        <Breadcrumb />
            <div className="col col-12">
                <ol className="list-group list-group-numbered">
                    {users.map(user=>{
                        return (
                            <Table data={user} />
                        )
                    })}
                </ol>
            </div>
        </div>
        </div>
    </div>
    );
}



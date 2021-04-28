import React from 'react'
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/action';
import { Link } from 'react-router-dom';

export const User = ()=> {
  const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="position-relative">
        <div className="d-flex justify-content-center align-items-center">
          <Link to='/userlist'>
            <button type="button"
            className="btn btn-success"
            onClick={dispatch(getUsers)}>
              Click me!
            </button>
          </Link> 
        </div>
      </div>
    </div>
  );
}


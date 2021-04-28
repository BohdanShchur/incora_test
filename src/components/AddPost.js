import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPost } from '../redux/action'

export const AddPost = ({show, showModal, userId}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const submitPost = (event)=>{
        const form = {
            title: title,
            body: text,
            userId: userId
        }
        dispatch(setPost(form))
        event.preventDefault();
        showModal()
    }

    const changeTitle = (event)=>{
        setTitle(event.target.value)
    }

    const changeText = (event)=>{
        setText(event.target.value)
    }

    return (
        <div className="addModal">
            <div className="modal-dialog modal-lg">
                <form className="modal-content" onSubmit={submitPost}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Add New Post
                        </h5>
                        <button type="button"
                         className="btn btn-outline-danger"
                          onClick={showModal}>
                              &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="row">
                                <div className="col col-6">
                                    <label htmlFor="textarea" class="form-label">Title</label>
                                    <input type="text"
                                     id="title"
                                     placeholder="Gaius Iulius Caesar"
                                      className="form-control"
                                      value={title}
                                      onChange={changeTitle} />
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col col-12">
                                    <label htmlFor="textarea" class="form-label">Comment</label>
                                    <textarea placeholder="Rome Imperator"
                                     id="textarea"
                                     value={text}
                                     onChange={changeText}
                                     className="form-control"
                                     />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                    <input type="submit"
                         className="btn btn-primary" value="Submit"/>
                             
                        <button type="button"
                            className="btn btn-danger"
                            onClick={showModal}>
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
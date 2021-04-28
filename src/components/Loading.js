import React from 'react'

export const Loading = ()=>{
    return(
        <div className="container">
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <span className="spinner-border" role="status"></span>
                </div>
            </div>
        </div>
    )
}
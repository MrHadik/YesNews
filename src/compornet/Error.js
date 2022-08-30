import React from 'react'

export default function error(props) {
    return (
        <div>
            <div className='container text-center my-5'>
                <h1>API Error</h1>
                <h5>{props.msg}</h5>
            </div>
        </div>
    )
}

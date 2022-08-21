
import React, { Component } from 'react'
import yesnews from './yesnews.png'

export class Newsbage extends Component {

    render() {
        let { title, dipriptin, imgURL, url, author, pdate } = this.props; //To Get Data from props
        return (

            <div className="card my-2"  >
                <img src={imgURL?imgURL:yesnews} className="card-img-top" alt="..." /> 
                <div className="card-body ">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{dipriptin}</p>
                    <p className="card-text"><small className="text-muted"><b>Post By</b> {author} <br/> <b>Date: </b> {new Date(pdate).toUTCString()}</small></p>
                    <a href={url} target="_balnk"  className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>

        )
    }
}

export default Newsbage

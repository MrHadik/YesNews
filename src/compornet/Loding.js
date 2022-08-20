import React, { Component } from 'react'
import lod from './Infinity.gif'
export default class loding extends Component {
  render() {
    return (
      <div className='text-center my-5'>
        <img  src={lod} alt="loding"></img>
      </div>
    )
  }
}

import React, { Component } from 'react'
import loading from './loading.gif'

export default class GIF extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-content-center'>
         <img src={loading} alt="loading" />
      </div>
    )
  }
}

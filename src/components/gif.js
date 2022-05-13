import React from 'react'
import loading from './loading.gif'

const GIF = () =>  {
    return (
      <div className='d-flex justify-content-center align-content-center'>
         <img src={loading} alt="loading" />
      </div>
    )
  }
export default GIF;

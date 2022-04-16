import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Country extends Component {
   render() {
      return (
         <>
            <div className="dropdown " style={{marginRight:'100px'}}>
               <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
               </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item" to="/in">India</Link></li>
                  <li><Link className="dropdown-item" to="/ar">Argentina</Link></li>
                  <li><Link className="dropdown-item" to="/ae">United Arab Emirates</Link></li>
                  <li><Link className="dropdown-item" to="/at">Austria</Link></li>
               </ul>
            </div>
         </>
      )
   }
}

import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <h1>ticket counter</h1>
          
            {/* <a href="/home"></a>
            <a href="/home">home</a>
            <a href="/home">home</a>
            <a href="/home">home</a>
            <a href="/home">home</a> */}

                   <nav>
          <ul>
            <li>
              <Link className="li" to="/home">Home</Link>
            </li>
          
            <li>
              <Link className="li" to="/search">search</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/cart">cart</Link>
            </li>
           
          </ul>
        </nav> 
        </div>
    )
}

export default Header

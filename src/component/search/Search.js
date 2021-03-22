import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css'

const Search = () => {
 
   
    return (
        <div className="input">
       
       <input type="text" placeholder="trable name" name="" />
       <br/>
       <input type="text" placeholder="counter" name="" />
       <br/>
<Link to="/cart"><button >search</button></Link>
        
        </div>
    );
};

export default Search;
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { search } from '../../App';
import './Data.css'




const Data = (props) => {

    const {name,picture}=props.data
  const [serchdata,setSearch]=useContext(search)
  const history=useHistory()

  const handleseach=()=>{
      history.push("/search")
      setSearch(props.data)
  }

    return (
        <div onClick={handleseach} className="imgsize">
            <h1>name {name}</h1>
            <img src={picture} alt=""/>
        </div>
    );
};

export default Data;
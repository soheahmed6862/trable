import React, { useState } from 'react';
import logo1 from '../../images/Frame-1.png'
import logo2 from '../../images/Frame-2.png'
import logo3 from '../../images/Frame.png'
import logo4 from '../../images/Group.png'
import { useHistory } from 'react-router-dom';
import './Home.css'
import fakedata from '../../fakedata/Fakedata.json'
import Data from '../data/Data'




const Home = () => {
  const data=fakedata

    const [datas,setdata]=useState(data)
  console.log(datas)
  const history = useHistory()

     const handleimg= () => {
         history.push("/search")
         console.log("hjksgadhkfjg")
     }

     

    return (
        <div className="car">
              
         
           {
     datas.map(data=><Data data={data}></Data>)
 }

        </div>
    );
};

export default Home;
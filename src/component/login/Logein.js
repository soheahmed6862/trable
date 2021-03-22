
import React, { useContext } from 'react'


import  {useState} from 'react'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { initializefirebase,handlGoogleignin,handelSingOut, handelFbdsignin, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './Loginmanager';

function Logein() {
  

 

  const [newUser,setnewUser] =useState(false);
  const [logInUser,setLogInUser]=useContext(UserContext)

  // const [singoutuser,setSingoutuser]=useState()
  const [user,setUser]=useState({
    isSignIN:false,
    name: '',
    email: '',
    password: '',
    phone: '',
  
  })
  initializefirebase()
console.log(user)
let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };



  const handleSubmit=(e)=>{

   
if(newUser && user.email && user.email){

  createUserWithEmailAndPassword(user.neme,user.email,user.password)
  .then(result=>{
    setUser(result)
    setLogInUser(result)
    history.replace(from);
  })


}
if(!newUser && user.email && user.password){

  signInWithEmailAndPassword(user.email,user.password)
  .then(result=>{
    setUser(result)
    setLogInUser(result)
    history.replace(from);
  })

}

e.preventDefault()

  }

  const hendleonchane=(event)=>{
let isFormvalid=true;
    // console.log(event.target.value,event.target.name)

    if(event.target.name==='email'){
      isFormvalid= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.value)
        
    }
    if(event.target.name==='password'){
            //  const isPasswordvalid=event.target.value.length>6

            isFormvalid=/.{4,}/.test(event.target.value)

          
    }
    if(isFormvalid){
    const newUserinfo={...user};
    newUserinfo[event.target.name]=event.target.value
    setUser(newUserinfo)

    }
  }

  ////////////////////////////////////////////////////////////////GOOGLE SING IN////////////////////////////////

  const Googlesignin=()=>{
    handlGoogleignin()
    .then(result=>{
      setUser(result)
      setLogInUser(result)

      history.replace(from);
     

    })
  }
  


////////////////////////////////////////////////////////////////GOOGLE SING IN////////////////////////////////

////////////////////////////////////////////////////////////////GOOGLE SING outN////////////////////////////////
const SingOut =()=>{
  handelSingOut() 
  .then(result=>{
    setUser(result)
    setLogInUser(result)
  })
}

////////////////////////////////////////////////////////////////fb Fbdsignin/////////////////////
const Fbdsignin=()=>{
  
  handelFbdsignin()
  .then(result=>{
    setUser(result)
    setLogInUser(result)
  })

}

////////////////////////////////////////////////////////////////fb Fbdsignin/////////////////////



  return (
    <div className="App">

{
  user.isSignIN ? <button onClick={()=>SingOut()}>sign out</button> :
  <button onClick={()=>Googlesignin()}>sign in</button>
  // <button onClick={()=>Googlesignin()}>sign in</button>
}
<br/>
  
  <button onClick={Fbdsignin}>Facebook login</button>

  {
    user.isSignIN && <div>
      <p>welcome:{user.name}</p>
      <p>email:{user.email}</p>
      </div>
  }
  <p>email: {user.email}</p>
  <p>password: {user.password}</p>
           <input type="checkbox" onChange={()=>setnewUser(!newUser)} name="name" value=""/>
           <label htmlFor="newUser">user sing up</label>
  <div>
    
          <form onSubmit={handleSubmit}>
       {
          newUser && <input type="text" name="" onBlur={hendleonchane} placeholder="name" /> 
       }
       <br/>
      <input type="text" onBlur={hendleonchane} name="email" required placeholder="email"/> <br/>
            <input type="password"  required name="password" onBlur={hendleonchane}  placeholder="password"/> <br/>
            <input type="submit" setContext={setLogInUser} value={newUser ? 'sign up': 'sign in'}/>
          </form>

          <p>{user.error}</p>
          {
            user.success && <p style={{color: 'green'}}>user {newUser ? ' creat' : 'log in'} success</p>
          }

  </div>

    </div>
  );
}




export default Logein;

// import React from 'react';

// const Logein = () => {
//     return (
//         <div>
         
//         </div>
//     );
// };

// export default Logein;
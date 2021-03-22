import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../login/configaretion';

export const initializefirebase=()=>{

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        }
      

};



///////////////////////////////////////////////////////////////////



export const handlGoogleignin=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth()
    .signInWithPopup(provider)
    .then(results=>{

      const {email,displayName}=results.user
      // console.log(email,displayName)
      const isSigninUser ={
        isSignIN:true,
        name:displayName,
        email:email,
        success:true
      }
      console.log(isSigninUser)
   return isSigninUser
    })
    .catch(err=>{
      console.log(err)
      console.log(err.message)
    })

  
}


////////

 export const handelFbdsignin=()=>{

    const fbprovider = new firebase.auth.FacebookAuthProvider();
  return  firebase
  .auth()
  .signInWithPopup(fbprovider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
       user.success =true
    return user

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    console.log(user,accessToken)

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
  }


////////////////////////////////////////////////////////////////google singoutuser
export const handelSingOut=()=>{
    console.log("singout")

   return firebase.auth().signOut()
    .then(results=>{
     const singoutuser={
       isSignIN:false,
       name:'',
       email:'',
       error: '',
       success:false

     }
  return singoutuser
    })
    .catch(err=>{
      console.log(err)
      console.log(err.message)
    })
  }


///////////////////////////////////////////////////////////////
export const signInWithEmailAndPassword=(email, password)=>{
return    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
      // Signed in
      const newUserinfo=res.user;
      newUserinfo.error = '';
      newUserinfo.success =true
             return newUserinfo
    // console.log(" sing in update user",userCredential.user)
      // ...
    })
    .catch((error) => {
      const newUserinfo={}
      newUserinfo.error=error.message;
      newUserinfo.success=false
      return newUserinfo
       
    });
}

////////////////////////////////////////////////////////////////


export const createUserWithEmailAndPassword=(name,email,password)=>{


return  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
      // Signed in 
      
         const newUserinfo=res.user;
         newUserinfo.error = '';
         newUserinfo.success =true
         console.log(newUserinfo)
     
       updateUserinfo(name)
       return newUserinfo
  
       
     
      // ...
    })
    .catch((error) => {
  const newUserinfo={}
  newUserinfo.error=error.message;
  newUserinfo.success=false
  
 return newUserinfo
      // ..
    });

}

///////////////////////////////////////////////////////////////

export const updateUserinfo=name=>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function() {
      console.log('username update')
    }).catch(function(error) {
      // An error happened.
    });
  }

///////////////////////////////////////////////////////////////








const Loginmanager = () => {

    
    return (
        <div>
            
        </div>
    );
};

export default Loginmanager;
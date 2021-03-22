import logo from './logo.svg';
import './App.css';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/header/Header';
import Home from './component/home/Home';
import Logein from './component/login/Logein';
import Cart from './component/cart/Cart';
import Search from './component/search/Search';
import Data from './component/data/Data';
import { createContext, useState } from 'react';
import Privateroute from './component/privateroute/Privateroute';
export const UserContext=createContext()

 export const search=createContext()

function App() {
  const [logInUser,setLogInUser]=useState({})
  const [serchdata,setSearch]=useState({})

  return (
    <UserContext.Provider value={[logInUser,setLogInUser]}>
      <search.Provider value={[serchdata,setSearch]}>
        <h1>email {logInUser.email}</h1>
       <Router>
       <Header></Header>
         <Switch>
         
         <Route exact path="/">
          <Home></Home>

          </Route>
          <Route path="/home">
          <Home></Home>

          </Route>
          <Route path="/login">
        <Logein></Logein>

          </Route>
          <Route path="/cart">
             <Cart></Cart>

          </Route>
          <Route path="/data">
            <Data></Data>

          </Route>

             <Privateroute path="/search">
               <Search></Search>

          </Privateroute> 
                  
    
         </Switch>
       </Router>

      </search.Provider>
   
    </UserContext.Provider >
  );
}

export default App;

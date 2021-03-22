import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import {UserContext} from '../../App'

const Privateroute= ({ children, ...rest }) => {
    const [logInUser,setLogInUser]=useContext(UserContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        logInUser.email? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default Privateroute;
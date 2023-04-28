import { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './Routes/RoutesList';
import Nav from './Routes/Nav';
import './App.css';
import userContext from './userContext';
import JoblyApi from "./Api/JoblyApi";
import jwt_decode from "jwt-decode";



/**renders entire application
 * 
 * State: 
 *  - currentUser: the user object from API that is passed via context throughout app
 *  - token: { token, username, isLoading}
 * 
 * Props:none
 * 
 * App -> { Nav, RoutesList }
 * 
 * */
function App() {

  //can decode to get username from token
  const [token, setToken] = useState(localStorage.getItem("token"));
  // console.log("right after usestate", userAuth.token);
  const [currentUser, setCurrentUser] = useState({ user: {token:token}, isLoading: true });

  console.log("App currentUser: ", currentUser, "token: ", token);

  /** Send login data from form to API and set state with returned token */
  async function login(username, password) {
    // console.log("login:", username);
    const userData = {
      username: username,
      password: password
    };
    const token = await JoblyApi.authenticateUser(userData);
    setToken(token);
  }

  /** Send new user data from form to API and set state with returned token */
  async function signup(username, password, firstName, lastName, email) {
    const userData = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email
    };
    const token = await JoblyApi.signupUser(userData);
    setToken(token);
  }

  /** Logout user by removing token and current user data  */
  function logout() { 
    const token = JoblyApi.logoutUser();
    // console.log(localStorage.getItem("token"));
    // console.log("token in logout", token);

    setToken(token);
    setCurrentUser({
      user: null,
      isLoading: false
    });
  }

  /** fetchest user details from API after every token change when token exists */
  useEffect(function fetchCurrentUserOnTokenChange() {
    // console.log(localStorage.getItem("token"));
    // console.log("token in token change", userAuth.token);
    if (token !== null) {
      async function fetchUser() {
        try {
          console.log("decode", jwt_decode(token));
          const {username} = jwt_decode(token);

          const user = await JoblyApi.getUser(username);
          setCurrentUser({
            user: user,
            isLoading: false
          });
        } catch (err) {
          setToken(localStorage.getItem("token"));
          setCurrentUser({
            user: null,
            isLoading: false
          })
        }

      } fetchUser();
    }
  }, [token])


  return (
    <div className="App">
      <userContext.Provider
        value={currentUser.user}>
        <BrowserRouter>
          <Nav logout={logout} />
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
    </div>

  );
}

export default App;

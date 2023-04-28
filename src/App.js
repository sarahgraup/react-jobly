import { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './Routes/RoutesList';
import Nav from './Routes/Nav';
import './App.css';
import userContext from './userContext';
import JoblyApi from "./Api/JoblyApi";
import jwt_decode from "jwt-decode";
import Loading from "./Loading";
import setLocalStorage from "./setLocalStorage";

/**renders entire application
 * 
 * State: 
 *  - currentUser: either undefined if token, null if no token, or object of user
 *    data if logged in user exists
 *  - token: { token}
 * 
 * Props:none
 * 
 * App -> { Nav, RoutesList }
 * 
 * */
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState(token ? undefined : null);

  console.log("App currentUser: ", currentUser, "token: ", token);

  /** Send login data from form to API and set state with returned token */
  async function login(username, password) {
    const userData = {
      username: username,
      password: password
    };
    const token = await JoblyApi.authenticateUser(userData);
    setLocalStorage(token);
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
    setLocalStorage(token);
    setToken(token);
  }

  /** Logout user by removing token and current user data  */
  function logout() {
    const token = JoblyApi.logoutUser();
    setLocalStorage(token);
    setToken(token);
    setCurrentUser(null);
  }

  /** fetchest user details from API after every token change when token exists */
  useEffect(function fetchCurrentUserOnTokenChange() {
    if (token !== null) {
      async function fetchUser() {
        try {
          const { username } = jwt_decode(token);

          const user = await JoblyApi.getUser(username);
          setCurrentUser(user);
        } catch (err) {
          setToken(localStorage.getItem("token"));
          setCurrentUser(null)
        }

      } fetchUser();
    } else {
      setCurrentUser(null)
    }
  }, [token])


  return (
    <div className="App">
      {currentUser !== undefined
        ? <userContext.Provider
          value={currentUser}>
          <BrowserRouter>
            <Nav logout={logout} />
            <RoutesList login={login} signup={signup} />
          </BrowserRouter>
        </userContext.Provider>
        : <Loading />
      }
    </div>

  );
}

export default App;

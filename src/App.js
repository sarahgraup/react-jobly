import { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Nav from './Nav';
import './App.css';
import userContext from './userContext';
import JoblyApi from './JoblyApi';


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

  const [token, setToken] = useState({ token: null, username: null, isLoading: true }); //TODO: choose a state name that won't yield token.token
  const [currentUser, setCurrentUser] = useState({ user: null, isLoading: true })

  console.log("App currentUser: ", currentUser, "token: ", token)

  /** Send login data from form to API and set state with returned token */
  // TODO: either change login to take user, password or { username, password }; match for signup
  async function login(formData) {
    const userData = {
      username: formData.username,
      password: formData.password
    };
    const token = await JoblyApi.authenticateUser(userData);
    setToken({
      token: token,
      username: formData.username,
      isLoading: false
    });
  }

  /** Send new user data from form to API and set state with returned token */
  async function signup(formData) {
    const userData = {
      username: formData.username,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email
    };
    const token = await JoblyApi.signupUser(userData);
    setToken({
      token: token,
      username: formData.username,
      isLoading: false
    });
  }

  /** Logout user by removing token and current user data  */
  async function logout() { // TODO: doesn't need to be async;
    // a better way is to make a method in API to clear the token; then call that here
    setToken({
      token: null,
      username: null,
      isLoading: false
    });
    setCurrentUser({
      user: null,
      isLoading: false
    });
  }

  /** fetchest user details from API after every token change when token exists */
  useEffect(function fetchCurrentUserOnTokenChange() {
    if (token.token !== null) {
      async function fetchUser() {
        try {
          const user = await JoblyApi.getUser(token.username);
          setCurrentUser({
            user: user,
            isLoading: false
          });
        } catch (err) {
          setToken({
            token: null,
            username: null,
            isLoading: false
          });
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

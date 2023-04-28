import { NavLink } from "react-router-dom";
import { useContext } from "react";
import './Nav.css';
import userContext from "../userContext";

/** Component for Naf
 * 
 * Navigation bar for every page on site 
 * When user is logged in, shows main pages: 
 *  - home, profile, companies, jobs, logout
 * 
 * when user is not logged in shows:
 * - login, signup, home
 * 
 * 
 * State:none
 * 
 * Props:logout
 * 
 * Links to: /companies, /jobs, /, /login, /signup, /profile
 * 
 * App -> Nav
*/
function Nav({ logout }) {

    const currentUser = useContext(userContext);
    console.log("currentUser in nav", currentUser);

    //nav bar if there is not a current user 
    function notLoggedIn() {
        return (
            <div className="Nav-right">
                <NavLink className="Nav-Login" to="/login">
                    Login</NavLink>
                <NavLink className="Nav-signup" to="/signup">
                    Sign Up</NavLink>

            </div>
        );
    }

    //nav bar if there is a current user
    function loggedIn() {
        return (
            <div className="Nav-right">
                <NavLink className="Nav-Companies" to="/companies">
                    Companies</NavLink>
                <NavLink className="Nav-Jobs" to="/jobs">
                    Jobs</NavLink>
                <NavLink className="Nav-Profile" to="/profile">
                    Profile</NavLink>
                <NavLink className="Nav-logout" to="/" onClick={logout}>
                    Logout {currentUser.user.username}</NavLink>

            </div>
        );
    }

    return (
        <nav className="Nav">
            <NavLink className="Nav-Home" to="/">
                Jobly</NavLink>
            {(currentUser !== null) ? loggedIn() : notLoggedIn()}
        </nav>
    );

}
export default Nav;
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import './Nav.css';
import userContext from "./userContext";

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
    console.log(currentUser);

    //nav bar if there is not a current user 
    function notLoggedIn() {
        return (
            <div className="Nav-right">
                <NavLink className="Nav-Login" to="/login"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: "white",
                        };
                    }}>
                    Login</NavLink>
                <NavLink className="Nav-signup" to="/signup"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: "white",
                        };
                    }}>
                    Sign Up</NavLink>

            </div>
        );
    }

    //nav bar if there is a current user
    // TODO: with the Nav a.active, we can use the class rather than the inline style
    function loggedIn() {
        return (
            <div className="Nav-right">
                <NavLink className="Nav-Companies" to="/companies"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: "white",
                        };
                    }}>
                    Companies</NavLink>
                <NavLink className="Nav-Jobs" to="/jobs"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: "white",
                        };
                    }}>
                    Jobs</NavLink>
                <NavLink className="Nav-Profile" to="/profile"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: "white",
                        };
                    }}>
                    Profile</NavLink>
                <NavLink className="Nav-logout" to="/" onClick={logout}>
                    Logout {currentUser.user.username}</NavLink>

            </div>
        );
    }

    return (
        <nav className="Nav">
            <NavLink className="Nav-Home" to="/"
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: "white",
                    }
                }}>
                Jobly</NavLink>
            {currentUser !== null ? loggedIn() : notLoggedIn()}
        </nav>
    );

}
export default Nav;
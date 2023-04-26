import { NavLink } from "react-router-dom";
import './Nav.css';
/** Component for Naf
 * 
 * Navigation bar for every page on site 
 * 
 * State:none
 * 
 * Props:none
 * 
 * Links to: /companies, /jobs, /
 * 
 * App -> Nav
*/
function Nav() {
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
            </div>
        </nav>
    );
}
export default Nav;
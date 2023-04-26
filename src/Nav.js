import { NavLink } from "react-router-dom";
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
                        color: "black",
                    }
                }}>
                Jobly</NavLink>
            <NavLink className="Nav-Companies" to="/companies"
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: "black",
                    };
                }}>
                Companies</NavLink>
            <NavLink className="Nav-Jobs" to="/jobs"
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: "black",
                    };
                }}>
                Jobs</NavLink>
        </nav>
    );
}
export default Nav;
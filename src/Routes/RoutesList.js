import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Home from '../Home';
import CompanyDetail from '../Companies/CompanyDetail';
import CompanyList from '../Companies/CompanyList';
import JobList from '../Jobs/JobList';
import userContext from '../userContext';
import Login from '../Users/Login';
import Signup from '../Users/Signup';
import Profile from '../Users/Profile';

/**Component for RoutesList
 * 
 * Routes to all site paths 
 * 
 * Props:loginUser, signupUser, updateUser
 * 
 * State:none
 * 
 * if not logged in 
 *  RoutesList -> {Signup, login}
 * 
 *  if logged in 
 * App -> RoutesList -> 
 * { Home, CompanyList, JobList, CompanyDetail } (when path is accessed)
 * */
function RoutesList({ login, signup, updateUser }) {
    console.log("RoutesList");
    const currentUser = useContext(userContext);
    console.log("current user in routes:", currentUser);

    if (currentUser === null) {
        return (
            <Routes>
                <Route path="/login" element={<Login login={login} />}></Route>
                <Route path="/signup" element={<Signup signup={signup} />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Navigate to="/" />} ></Route>
            </Routes>
        );

    }


    if (currentUser !== null) {
        return (
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/companies" element={<CompanyList />}></Route>
                <Route path="/companies/:handle" element={<CompanyDetail />}></Route>
                <Route path="/profile" element={<Profile updateUser={updateUser} />}></Route>
                <Route path="/jobs" element={<JobList />}></Route>
                <Route path="*" element={<Navigate to="/" />} ></Route>
            </Routes>
        );
    }

}

export default RoutesList;
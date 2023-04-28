import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Home from './Home';
import CompanyDetail from './Companies/CompanyDetail';
import CompanyList from './Companies/CompanyList';
import JobList from './Jobs/JobList';
import userContext from './userContext';
import Login from './Users/Login';
import Signup from './Users/Signup';
import Profile from './Users/Profile';

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
function RoutesList({ login, signup, update }) { //TODO: make update more exact, ie updateUser
    console.log("RoutesList");
    const currentUser = useContext(userContext);

    if (currentUser === null) {
        return (
            <Routes>
                <Route path="/login" element={<Login login={login} />}></Route>
                <Route path="/signup" element={<Signup signup={signup} />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/companies" element={<Navigate to="/" />}></Route> 
                {/* TODO: do not need 37 through 41, nor login and singup below */}
                <Route path="/profile" element={<Navigate to="/" />}></Route>
                <Route path="/companies/:handle" element={<Navigate to="/" />}></Route>
                <Route path="/jobs" element={<Navigate to="/" />}></Route>
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
                <Route path="/profile" element={<Profile update={update} />}></Route>
                <Route path="/jobs" element={<JobList />}></Route>
                <Route path="/login" element={<Navigate to="/" />}></Route>
                <Route path="/signup" element={<Navigate to="/" />}></Route>
                <Route path="*" element={<Navigate to="/" />} ></Route>
            </Routes>
        );
    }

}

export default RoutesList;
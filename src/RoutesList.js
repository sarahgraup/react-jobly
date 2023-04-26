import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import CompanyDetail from './Companies/CompanyDetail';
import CompanyList from './Companies/CompanyList';
import JobList from './Jobs/JobList';

/**Component for RoutesList
 * 
 * Routes to all site paths 
 * 
 * Props:none
 * 
 * State:none
 * 
 * App -> RoutesList -> { Home, CompanyList, JobList, CompanyDetail } (when path is accessed)
 * */ 
function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/companies" element={<CompanyList />}></Route>
            <Route path="/companies/:handle" element={<CompanyDetail />}></Route>
            <Route path="/jobs" element={<JobList />}></Route>
            <Route path="*" element={<Navigate to="/" />} ></Route>
        </Routes>
    );

}

export default RoutesList;
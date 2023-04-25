import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import CompanyDetail from './Companies/CompanyDetail';
import CompanyList from './Companies/CompanyList';
import JobList from './Jobs/JobList';

/**Routes to all site paths 
 * Props:none
 * State:none
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
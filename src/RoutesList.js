import { Routes, Route, Navigate } from 'react-router-dom';

/**Routes to all site paths */
function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/companies" element={<CompanyList />}></Route>
            <Route path="/companies/:handle" element={<CompanyDetail />}></Route>
            <Route path="/jobs" element={<JobList />}></Route>
            <Route path="*" element={<Navigate to="/"/>} ></Route>
        </Routes>
    );

}

export default RoutesList;
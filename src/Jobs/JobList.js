import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import Loading from "../Loading";
import JoblyApi from "../Api/JoblyApi";
import Search from "../Search";
/**
 * Component for JobList
 * 
 * gets API data for jobs
 * 
 *  props: none
 * 
 *  state: 
 *   - jobs {[jobs], isLoading}
 *   - searchTerm: string from search box
 * 
 * RouteList -> JobList -> { Search, JobCard }
 */

function JobList() {
    const [jobs, setJobs] = useState({ jobsData: [], isLoading: true });
    const [searchTerm, setSearchTerm] = useState('');

    // console.debug("JobList jobs state: ", jobs,
    //     "searchTerm state: ", searchTerm);

    //fetches jobs api after first render
    useEffect(function fetchJobsOnMount() {
        async function fetchJobs() {
            const results = await JoblyApi.getJobs();
            setJobs(curr => {
                curr.jobsData = results;
                curr.isLoading = false;
                return { ...curr };
            });
        }
        fetchJobs();
    }, []);

    ////fetches jobs from api after search submit filters; updateUser searchTerm state
    async function jobSearch(SearchTitle) {
        setSearchTerm(SearchTitle);

        try {
            const results = await JoblyApi.getJobs(SearchTitle);
            setJobs({
                jobsData: results,
                isLoading: false
            });
        } catch (err) {
            setJobs({
                jobsData: [],
                isLoading: false
            });
        }
    }


return (
    <div className="JobList">
        {jobs.isLoading
            ? <Loading />
            : <div>
                <Search search={jobSearch} />
                {searchTerm && <p>Showing results for "{searchTerm}"</p>}
                {jobs.jobsData.length ?
                    <JobCardList jobs={jobs.jobsData} /> :
                    <p>Sorry no results were found</p>}
            </div>}
    </div>
);
}
export default JobList;
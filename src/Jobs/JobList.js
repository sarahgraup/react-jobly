import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import Loading from "../Loading";
import JoblyApi from "../JoblyApi";
import Search from "../Search";
/**
 * Component for JobList
 * gets API data for jobs; renders list of all jobs or searched jobs)
 *  props: none
 * 
 *  state: jobs {[jobs], isLoading}
 * 
 *  calls: Search, JobCard
 * 
 * RouteList -> JobList
 */
function JobList(){
    const[jobs, setJobs] = useState({jobsData: [], isLoading: true});
    console.debug("JobList state: ", jobs);
    
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

    async function jobSearch(SearchTitle) {
        const results = await JoblyApi.getJobs(SearchTitle);
        setJobs(curr => {
            curr.jobsData = results;
            curr.isLoading = false;
            return { ...curr };
        });
    }
    console.log(jobs.jobsData);

    return (
        <div className="JobList">
            {jobs.isLoading
                ? <Loading />
                : <div>
                    <Search search={jobSearch} />
                    {jobs.jobsData ?
                        <JobCardList jobs={jobs.jobsData} /> :
                        <p>Sorry no results were found</p>}
                </div>}
        </div>
    );

}
export default JobList;
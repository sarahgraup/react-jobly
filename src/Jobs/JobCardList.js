import JobCard from "./JobCard";
/** Component for JobCardList
 * Handles data and renders an array of JobCards
 * 
 * Props:
 * - array of jobs
 * 
 * State:
 * - none
 * 
 * call list
 * 
 * JobList -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {
    // console.debug("JobCardList");

    return (
        <div className="JobCardList">
            {jobs.map(job =>
                <JobCard key={job.id} job={job} />
            )}
        </div>
    );
}

export default JobCardList;
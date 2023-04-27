import { convertAndFormat } from "../helperFuncs";
import "./JobCard.css";
/** Component for JObCard
 *  Renders a card with job details
 * 
 *  props: job {jobData}
 * 
 *  state: none
 *  
 * links to: none
 * 
 * JobCardList -> JobCard
 */

function JobCard({ job }) {
    console.debug("JobCard");

    const salary = convertAndFormat(job.salary);

    return (
        <div className="JobCard">
            <h2>{job.title}</h2>
            <h3>{job.companyName}</h3>

            <div>
                {"salary" in job && job.salary > 0 && (
                    <div>
                        Salary: 
                        ${salary}
                    </div>
                )}

                <div>
                    {"equity" in job && Number(job.equity) > 0 && (
                        <div>
                            Equity: {job.equity}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default JobCard;
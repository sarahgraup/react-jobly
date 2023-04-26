import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../JoblyApi';
import Loading from '../Loading';
import JobCardList from '../Jobs/JobCardList';

/**
 * gets API data for single company from params; renders a list of all company's jobs)
 * - props: none
 * - state: company {[company], isLoading} (state includes jobs)
 * - calls: Search, JobCard
 */
function CompanyDetail() {
    const [company, setCompany] = useState({ companyData: [], isLoading: true });
    console.debug("CompanyDetail state: ", company);

    const { handle } = useParams();

    useEffect(function fetchCompanyOnMount() {
        async function fetchCompany(handle) {
            const results = await JoblyApi.getCompany(handle);
            setCompany(curr => {
                curr.companyData = results;
                curr.isLoading = false;
                return { ...curr };
            })
        }
        fetchCompany(handle);
    }, []);

    return (
        <div className="CompanyDetail">
            {company.isLoading
                ? <Loading />
                : (<div>
                    <div className='CompanyDetail-name'>
                        <h2>{company.companyData.name}</h2>
                        <p>{company.companyData.description}</p>
                    </div>
                    <JobCardList jobs={company.companyData.jobs} />
                </div>)}

        </div>
    );
}
export default CompanyDetail;
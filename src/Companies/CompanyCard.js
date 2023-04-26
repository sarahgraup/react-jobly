import { Link } from "react-router-dom";

/** Component for CompanyCard
 *  Renders a card with company details
 * 
 *  props: company {companyData}
 * 
 *  state: none
 *  
 *  links to: /companies/:handle
 * 
 * CompanyCardList -> Company Card
 */

function CompanyCard({ company }) {
    console.debug("CompanyCard");

    return (
        <div className="CompanyCard">
            <Link to={`/companies/${company.handle}`}>
                {company.logoURL && <img src={company.logoURL} alt={`${company.name} logo`}/>}
                <h3>{company.name}</h3>
                <p>{company.description}</p>
            </Link>
        </div>
    )

}

export default CompanyCard;
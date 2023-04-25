App (renders routes, shows header)
  - props: none
  - state: none
  - reders: Routes, Nav


    Nav (renders nav bar with Home, Companies, Jobs)
    - props: none
    - state: none
    - calls: none
    - links to: { /companies, /jobs}


    RouteList (links all routes to components)
    - props: none
    - state: none
    - connects links to components: {
        /                    -- HomePage
        /jobs                -- JobsList
        /companies           -- CompaniesList
        /companies/:handle   -- CompanyDetail
        /*                   -- routes to /companies
        }


        HomePage (UI displays home page with h1 and h2)
        - props: none
        - state: none
        - calls: none


        Loading (UI loading screen)
        - props: none
        - state: none
        - calls: none


        CompanyList (gets API data for companies; renders list of all companies or searched companies)
        - props: none
        - state: companies {[companies], isLoading}
        - calls: Search, CompanyCard


            CompanyCard (UI individual company data with name, logo, and description)
            - props: company {companyData}
            - state: none
            - call: none
            - links to: /companies/:handle


        CompanyDetail (gets API data for single company from params; renders a list of all company's jobs)
        - props: none
        - state: company {[company], isLoading} (state includes jobs)
        - calls: Search, JobCard


        JobList (gets API data for jobs; renders list of all jobs or searched jobs)
        - props: none
        - state: jobs {[jobs], isLoading}
        - calls: Search, JobCard

        
        JobCardList
        - props: jobs
        - state: none
        - calls: none

            JobCard (UI individual job data with title, salary, and equity)
            - props: job {jobData}
            - state: none
            - calls: none

            Search (renders and handles search bar)
            - props: search (either jobSearch() or companySearch())
            - state: formData
            - calls: none



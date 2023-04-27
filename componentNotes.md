{“App (renders routes, shows header)
  - props: none
  - functions:
      - loginUser: API call; re-renders Login on failure or Home on success and updates user context TODO: handle in Login
      - signupUser: API call; re-renders Login on failure or Home on success and updates user context TODO: follow same handling as login
      - updateUser: API call; re-render Profile and updates user context
  - state: currentUser
  - reders: Routes, Nav

    (Provider
      - contains user data {username, name, token} and jobs applied for IDs TODO: token does not need to be here, but probably makes more sense in the API class
    )


    Nav (renders different nav bar with either Log In, Sign Up or Home, Companies, Jobs, Profile, Log out depending on logged in status)
    - uses userContext
    - props: logoutUser
    - state: none
    - calls: none
    - links to: { /companies, /jobs}


    RouteList (links all routes to components; if no logged in user, /jobs, /companies, and /profile redirect to /login)
    - uses userContext
    - props: loginUser, signupUser, updateUser
    - state: none
    - connects links to components: {
        /                    -- HomePage
        /jobs                -- JobsList
        /companies           -- CompaniesList
        /companies/:handle   -- CompanyDetail
        /login               -- Login
        /signup              -- Signup
        /profile             -- Profile
        /*                   -- routes to /companies
        }


        HomePage (UI displays home page with h1 and h2 and either Login, Signup buttons or "Welcome back, name" depending on logged in status)
        - uses userContext.firstName
        - props: none
        - state: none
        - calls: none


        Loading (UI loading screen)
        - props: none
        - state: none
        - calls: none

        Login (renders login form and calls loginUser with inputted info)
        - props: loginUser
        - function: handleSubmit - call loginUser and, if no errors, redirect to homepage
        - state: formData
        - calls: none


        Signup (renders signup form and calls signupUser with inputted info)
        - props: signupUser
        - state: formData
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
        - uses userContext.username
        - props: none
        - state: jobs {[jobs], isLoading}, jobsAppliedTo {[jobId], isLoading}
        - calls: Search, JobCard

          Search (renders and handles search bar)
          - props: search (either jobSearch() or companySearch())
          - state: formData
          - calls: none

          JobCardList
          - props: jobs, jobsAppliedTo
          - state: none
          - calls: none

              JobCard (UI individual job data with title, salary, equity, and button for Apply)
              - props: job {title, salary, equity, applied}
              - state: none
              - calls: none


        Profile (render profile form and call saveProfile at App level)
        - props: updateUser
        - state: formData
        - calls: none


import { render } from "@testing-library/react";
import JobCard from "./JobCard";

const testJob1 = {
    title: "Test",
    companyName: "Smith and Co",
    companyHandle: "smith",
    salary: 30000,
    equity: 0.3
};

const testJob2 = {
    title: "Other Test",
    companyName: "Smith and Co",
    companyHandle: "smith",
    salary: null,
    equity: 0
};

test("renders without crashing", function () {
    render(<JobCard job={testJob1} />)
})

test("matches snapshot", function () {
    const { container } = render(<JobCard job={testJob1} />);
    expect(container).toMatchSnapshot();
})

test("job with all fields renders correctly", function () {
    const { container } = render(<JobCard job={testJob1} />);
    const jobCard = container.querySelector(".JobCard")
    
    expect(jobCard).toContainHTML("<h2>Test</h2>");
    expect(jobCard).toContainHTML("<h3>Smith and Co</h3>");
    expect(jobCard).toContainHTML("Salary: $30,000");
    expect(jobCard).toContainHTML("Equity: 0.3");
});

test("job with missing salary and equity renders correctly", function () {
    const { container } = render(<JobCard job={testJob2} />);
    const jobCard = container.querySelector(".JobCard")
    
    expect(jobCard).toContainHTML("<h2>Other Test</h2>");
    expect(jobCard).toContainHTML("<h3>Smith and Co</h3>");
    expect(jobCard).not.toContainHTML("Salary:");
    expect(jobCard).not.toContainHTML("Equity:");
});
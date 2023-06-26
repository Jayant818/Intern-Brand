"use client";

import { useEffect, useState } from "react";
import ButtonGroup from "./ButtonGroup";
import JobListing from "./JobListing";
import SearchForm from "./SearchForm";
import JobDescription from "./JobDescription";

export default function Main() {
	const [data, setData] = useState([]);
	const [JobName, setJobName] = useState("Software Developer Intern");
	const [JobData, setJobData] = useState(data?.Job1);

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log("Fetching Data");
				const response = await fetch("/api/get-Data");
				const data = await response.json();
				setData(data);
				setJobData(data.Job1);
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	const handleChange = (name) => {
		setJobName(name);
		// console.log("Job Data", JobData);
		// console.log(name);
		for (let key in data) {
			let job = data[key];
			if (job.Name === name) {
				setJobData(job);
			}
		}
	};

	return (
		<div className="flex">
			{/* Job Listing Panel */}
			<div className="w-[30%] ml-6 mt-4">
				<ButtonGroup />
				<JobListing data={data} handleChange={handleChange} />
			</div>
			{/* Right */}
			<div className="w-[60%] mt-4">
				<SearchForm />
				<JobDescription JobName={JobName} data={JobData} />
			</div>
		</div>
	);
}

"use client";

import { useEffect, useState } from "react";
import ButtonGroup from "./ButtonGroup";
import JobListing from "./JobListing";
import SearchForm from "./SearchForm";

export default function Main() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log("Fetching Data");
				const response = await fetch("/api/get-Data");
				const data = await response.json();
				setData(data);
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="flex">
			{/* Job Listing Panel */}
			<div className="w-[30%]">
				<ButtonGroup />
				<JobListing data={data} />
			</div>
			{/* Right */}
			<div className="w-[70%]">
				<SearchForm />
			</div>
		</div>
	);
}

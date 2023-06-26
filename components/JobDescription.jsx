"use client";

import { useEffect } from "react";

export default function JobDescription(props) {
	const { name, data } = props;

	return (
		<div className="bg-white p-6 mt-4 rounded-lg flex flex-col space-y-5 mb-6">
			{data ? (
				<>
					<div className="flex items-center space-x-4">
						<img className="w-13 h-13" src={data.CompLogo} alt="/" />
						<div>
							<div className="font-bold">{data.Name}</div>
							<div className="font-bold text-gray-400">{data.Company}</div>
						</div>
					</div>
					<div className="flex  ">
						<div>
							<div className="flex border-b-2 border-gray-200 border-r-2 items-center p-2 gap-2">
								<img className="w-10 h-10" src="/Duration.png" alt="/" />
								<div>
									<div className="font-bold">{data.Duration}</div>
									<div>Duration</div>
								</div>
							</div>
							<div className="flex  border-gray-200 border-r-2 items-center p-2 gap-2">
								<img className="w-10 h-10" src="/Calender.png" alt="/" />
								<div>
									<div className="font-bold">{data.Posted}</div>
									<div>Posted</div>
								</div>
							</div>
						</div>
						<div>
							<div className="flex border-b-2 border-gray-200 border-r-2 items-center p-2 gap-2">
								<img className="w-10 h-10" src="/Exp.png" alt="/" />
								<div>
									<div className="font-bold">{data.Experience}</div>
									<div>Experience</div>
								</div>
							</div>
							<div className="flex border-gray-200 border-r-2 items-center p-2 gap-2">
								<img className="w-10 h-10" src="/EndsIn.png" alt="/" />
								<div>
									<div className="font-bold">{data.EndsIn}</div>
									<div>Ends In</div>
								</div>
							</div>
						</div>
						<div>
							<div className="flex border-b-2 border-gray-200 border-r-2 items-center p-2 gap-2">
								<img className="w-10 h-10" src="/Type.png" alt="/" />
								<div>
									<div className="font-bold">{data.Type}</div>
									<div>Stipend</div>
								</div>
							</div>
							<div className="flex border-gray-200 border-r-2 items-center p-2 gap-2">
								<img className="w-10 h-10" src="/OpenPos.png" alt="/" />
								<div>
									<div className="font-bold">{data.OpenPosition}</div>
									<div>Open Position</div>
								</div>
							</div>
						</div>
						<div>
							<div className="flex border-b-2 border-gray-200  items-center p-2 gap-2">
								<img className="w-10 h-10" src="/Location.png" alt="/" />
								<div>
									<div className="font-bold">{data.Location}</div>
									<div>Location</div>
								</div>
							</div>
							<div className="flex  items-center ">
								<img className="w-10 h-10" src="/Applicants.png" alt="/" />
								<div>
									<div className="font-bold">{data.Applicants}</div>
									<div>Applicants</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap gap-8">
						{data.Tags.split(",").map((tag) => (
							<p
								className=" shadow-md border-2 p-2 border-[#f2f4f7] rounded-md  bg-[#f2f4f7] font-semi-bold "
								key={tag}
							>
								{tag}
							</p>
						))}
					</div>
					<div className="">
						<h3 className="font-bold">About Us</h3>
						<p>{data.AboutUs}</p>
					</div>
					<div>
						<h3 className="font-bold">Requirements</h3>
						<ul className="list-disc">
							{data.Requirements.split("|").map((m, ind) => (
								<li key={ind}>{m}</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="font-bold">Responsibilities</h3>
						<ul className="list-disc">
							{data.Responsibilities.split("|").map((m, ind) => (
								<li key={ind}>{m}</li>
							))}
						</ul>
					</div>
					<a href="/" className="text-purple-800 font-bold hover:underline">
						Visit Website
					</a>
					<button className="fixed bottom-20 right-[450px] bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold  rounded-full py-2  px-4 shadow-md">
						<a href="/">Apply Now</a>
					</button>
				</>
			) : (
				<center className="text-xl">Loading ...........................</center>
			)}
		</div>
	);
}

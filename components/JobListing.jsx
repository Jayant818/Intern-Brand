export default function JobListing(props) {
	const data = props.data;
	return (
		<div className="flex flex-col space-y-6 mt-4 ">
			{Object.values(data).map((job) => (
				<div
					key={job.Name}
					className="w-[370px] bg-white text-black p-6 space-y-2 rounded-lg"
				>
					<div className="flex justify-between items-center">
						<div>
							<p className="font-bold tracking-wide">{job.Name}</p>
							<p className="text-gray-400">{job.Company}</p>
						</div>
						<img
							className="border-2 border-gray-300 w-8 h-8 hover:bg-blue-400 bg-white "
							src="/Bookmark.png"
						/>
					</div>
					<div className="flex justify-between items-center">
						<img className="w-6 h-6" src={job.CompLogo} />
						<p className="flex">
							{job.Tags.split(",")
								.splice(0, 3)
								.map((tag) => (
									<p
										className=" shadow-md border-2 p-2 border-gray-300 rounded-md text-xs bg-[##f2f4f7] font-bold "
										key={tag}
									>
										{tag}
									</p>
								))}
							<p className="border-2 p-2 shadow-md  border-gray-300 rounded-md text-xs  bg-[##f2f4f7] font-black text-[#6938ef]">
								+2
							</p>
						</p>
					</div>
					<div className="flex justify-between">
						<div className="space-y-3">
							<div className="flex gap-2 items-center ">
								<img className="w-6 h-6" src="/Duration.png" />
								<p>
									<b>{job.Duration}</b>
								</p>
							</div>
							<div className="flex gap-2 items-center ">
								<img className="w-6 h-6" src="/Applicants.png" />
								<p>
									<b>{job.Applicants}</b> Applicants
								</p>
							</div>
						</div>
						<div className="space-y-3">
							<div className="flex gap-2 items-center ">
								<img className="w-6 h-6" src="/Type.png" />
								<p>
									<b>{job.Type}</b>
								</p>
							</div>
							<div className="flex gap-2 items-center">
								<img className="w-6 h-6" src="/EndsIn.png" />
								<p>
									Ends in <b>{job.EndsIn}</b>
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

import React from "react";

export default function Navbar() {
	return (
		<header className="flex justify-between p-4 bg-white items-center">
			<h3 className="font-bold tracking-wide ml-10 text-xl">InternBrand</h3>
			<ul className="flex space-x-6">
				<li>
					<a href="/" className="flex gap-2">
						<img
							className="w-6 h-6 bg-white text-white"
							src="/BrowseListing.png"
							alt="/"
						/>
						<p className="text-[#667085] font-medium">Browse Listing</p>
					</a>
				</li>
				<li>
					<a href="/" className="flex gap-2">
						<img
							className="w-6 h-6 bg-white text-white"
							src="/ApplicationHistory.png"
							alt="/"
						/>
						<p className="text-[#667085] font-medium">Application History</p>
					</a>
				</li>
				<li>
					<a href="/" className="flex gap-2">
						<img
							className="w-6  h-6 bg-white text-white"
							src="/Blog.png"
							alt="/"
						/>
						<p className="text-[#667085] font-medium">Blog</p>
					</a>
				</li>
				<li>
					<a href="/" className="flex gap-2">
						<img
							className="w-6 h-6 bg-white text-white"
							src="/ContactUs.png"
							alt="/"
						/>
						<p className="text-[#667085] font-medium">Contact Us</p>
					</a>
				</li>
			</ul>
			<div className="flex justify-center items-center gap-3">
				<a href="/">
					<img src="/Alerts.png" className="w-6 h-6" alt="/" />
				</a>
				<a href="/">
					<img src="/Person.png" className="w-10 h-10" alt="/" />
				</a>
			</div>
		</header>
	);
}

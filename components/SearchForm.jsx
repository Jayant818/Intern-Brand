import React, { useState } from "react";

export default function SearchForm() {
	const [text, setText] = useState("");
	const handleChange = (e) => {
		setText(e.target.value);
	};

	const [showDialog, setShowDialog] = useState(false);
	const openDialog = () => {
		setShowDialog(true);
	};
	const closeDialog = () => {
		setShowDialog(false);
	};

	return (
		<>
			<form className="flex items-center bg-purple-500">
				<input
					type="text"
					value={text}
					onChange={handleChange}
					className="bg-white py-2 px-4 rounded-l-md w-full"
				/>
				<div className="bg-purple-600 py-2 px-4 rounded-r-md">
					<button onClick={openDialog}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-6 h-6 text-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</form>

			{showDialog && (
				<div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white w-80 p-4 rounded">
						<div className="flex items-center justify-between">
							<h2 className="text-lg font-semibold">Filter</h2>
							<button onClick={closeDialog}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-6 h-6 text-gray-500 hover:text-gray-700"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<form>
							<div className="flex justify-between mt-4">
								<div className="w-1/2 mr-2">
									<label className="block mb-1">Category</label>
									<select className="w-full bg-purple-200">
										{/* Options for category */}
									</select>
								</div>
								<div className="w-1/2 ml-2">
									<label className="block mb-1">Skills</label>
									<select className="w-full bg-purple-200">
										{/* Options for skills */}
									</select>
								</div>
							</div>
							<div className="flex justify-between mt-4">
								<div className="w-1/2 mr-2">
									<label className="block mb-1">Duration (Months)</label>
									<input
										type="range"
										min={1}
										max={6}
										step={1}
										className="w-full bg-purple-200"
									/>
								</div>
								<div className="w-1/2 ml-2">
									<label className="block mb-1">Stipends</label>
									<input
										type="range"
										min={0}
										max={40}
										step={1}
										className="w-full bg-purple-200"
									/>
								</div>
							</div>
							<div className="flex justify-between mt-4">
								<div className="w-1/2 mr-2">
									<label className="block mb-1">Stipends</label>
									<input
										type="range"
										min={0}
										max={250}
										step={10}
										className="w-full bg-purple-200"
									/>
								</div>
								<div className="w-1/2 ml-2">
									<label className="block mb-1">Duration (Months)</label>
									<input
										type="range"
										min={0}
										max={150}
										step={15}
										className="w-full bg-purple-200"
									/>
								</div>
							</div>
						</form>
						<div className="flex justify-end mt-6">
							<button className="text-purple-500 bg-white px-4 py-2 rounded-md">
								Clear All
							</button>
							<button className="text-white bg-purple-500 px-4 py-2 rounded-md ml-4">
								Apply
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

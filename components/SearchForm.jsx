import { useState } from "react";

const SearchForm = () => {
	const [searchText, setSearchText] = useState("");
	const [openFilter, setOpenFilter] = useState(false);
	const [category, setCategory] = useState("");
	const [skills, setSkills] = useState("");
	const [isPartTime, setIsPartTime] = useState(false);
	const [isFullTime, setIsFullTime] = useState(false);
	const [isWorkFromHome, setIsWorkFromHome] = useState(false);
	const [isInOffice, setIsInOffice] = useState(false);
	const [duration, setDuration] = useState([1, 6]);
	const [stipend, setStipend] = useState([0, 40000]);
	const [vacancies, setVacancies] = useState([0, 250]);

	const handleFilter = () => {
		setOpenFilter(!openFilter);
	};

	const handleClick = () => {
		setOpenFilter(false);
	};

	const handleCategoryChange = (event) => {
		setCategory(event.target.value);
	};

	const handleSkillsChange = (event) => {
		setSkills(event.target.value);
	};

	const handleIsPartTimeChange = (event) => {
		setIsPartTime(event.target.checked);
	};

	const handleIsFullTimeChange = (event) => {
		setIsFullTime(event.target.checked);
	};

	const handleIsWorkFromHomeChange = (event) => {
		setIsWorkFromHome(event.target.checked);
	};

	const handleIsInOfficeChange = (event) => {
		setIsInOffice(event.target.checked);
	};

	const handleDurationChange = (event, newValue) => {
		setDuration(newValue);
	};

	const handleStipendChange = (event, newValue) => {
		setStipend(newValue);
	};

	const handleVacanciesChange = (event, newValue) => {
		setVacancies(newValue);
	};

	const handleClearFilter = () => {
		setCategory("");
		setSkills("");
		setIsPartTime(false);
		setIsFullTime(false);
		setIsWorkFromHome(false);
		setIsInOffice(false);
		setDuration([1, 6]);
		setStipend([0, 40000]);
		setVacancies([0, 250]);
	};

	const handleApplyFilter = () => {
		// TODO: Apply filter and close dialog
		setOpenFilter(false);
	};

	return (
		<div>
			<div className="relative border-b border-gray-400">
				<input
					className="w-full bg-white pl-4 py-2 focus:outline-none focus:ring-purple-400 focus:border-purple-400 transition-all duration-200 rounded-md"
					type="text"
					placeholder="Search Jobs"
					value={searchText}
					onChange={(event) => setSearchText(event.target.value)}
				/>
				<button className="absolute right-10 top-1/2  bg-purple-500 py-2 px-2  rounded-sm  transform -translate-y-1/2">
					<img
						className="w-6 h-6 text-purple-600 hover:text-purple-700 transition-all duration-200 bg-purple-500"
						src="/loupe.png"
						alt="/"
					/>
				</button>
				<div
					className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
					onClick={handleFilter}
				>
					<img
						className="w-6 h-6 text-purple-600 "
						src="/Filter.png"
						alt="filter"
					/>
				</div>
			</div>
			{openFilter && (
				<div className="fixed right-1/4 top-1/2 bg-gray-700 bg-opacity-50 z-10">
					<div className="bg-white rounded-md p-4 w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<div className="flex justify-between items-center">
							<h2 className="text-lg font-semibold mb-2">Filter</h2>
							<div onClick={handleClick} className="text-bold cursor-pointer">
								X
							</div>
						</div>
						<div className="mb-4">
							<label htmlFor="category" className="block font-medium">
								Category
							</label>
							<input
								id="category"
								type="text"
								className="w-full py-1 px-2 border border-gray-400 rounded-lg focus:outline-none focus:border-purple-400 transition-all duration-200"
								value={category}
								onChange={handleCategoryChange}
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="skills" className="block font-medium">
								Skills
							</label>
							<input
								id="skills"
								type="text"
								className="w-full py-1 px-2 border border-gray-400 rounded-lg focus:outline-none focus:border-purple-400 transition-all duration-200"
								value={skills}
								onChange={handleSkillsChange}
							/>
						</div>
						<div className="mb-4">
							<p className="block font-medium mb-2">Type</p>
							<div className="flex justify-between">
								<label className="inline-flex items-center">
									<input
										type="checkbox"
										className="form-checkbox"
										checked={isPartTime}
										onChange={handleIsPartTimeChange}
									/>
									<span className="ml-2">Part Time</span>
								</label>
								<label className="inline-flex items-center">
									<input
										type="checkbox"
										className="form-checkbox"
										checked={isFullTime}
										onChange={handleIsFullTimeChange}
									/>
									<span className="ml-2">Full Time</span>
								</label>
								<label className="inline-flex items-center">
									<input
										type="checkbox"
										className="form-checkbox"
										checked={isWorkFromHome}
										onChange={handleIsWorkFromHomeChange}
									/>
									<span className="ml-2">Work from Home</span>
								</label>
								<label className="inline-flex items-center">
									<input
										type="checkbox"
										className="form-checkbox"
										checked={isInOffice}
										onChange={handleIsInOfficeChange}
									/>
									<span className="ml-2">In Office</span>
								</label>
							</div>
						</div>
						<div className="mb-4">
							<label
								htmlFor="duration-slider"
								className="block font-medium mb-2"
							>
								Duration (months)
							</label>
							<div className="flex items-center justify-between">
								<span>1</span>
								<span>6</span>
							</div>
							<input
								id="duration-slider"
								type="range"
								min="1"
								max="12"
								step="1"
								value={duration}
								onChange={handleDurationChange}
								className="w-full mt-2"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="stipend-slider"
								className="block font-medium mb-2"
							>
								Stipend (Rs.)
							</label>
							<div className="flex items-center justify-between">
								<span>0</span>
								<span>40,000</span>
							</div>
							<input
								id="stipend-slider"
								type="range"
								min="0"
								max="100000"
								step="1000"
								value={stipend}
								onChange={handleStipendChange}
								className="w-full mt-2"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="vacancies-slider"
								className="block font-medium mb-2"
							>
								Vacancies
							</label>
							<div className="flex items-center justify-between">
								<span>0</span>
								<span>250</span>
							</div>
							<input
								id="vacancies-slider"
								type="range"
								min="0"
								max="500"
								step="1"
								value={vacancies}
								onChange={handleVacanciesChange}
								className="w-full mt-2"
							/>
						</div>
						<div className="flex justify-between">
							<button
								className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
								onClick={handleClearFilter}
							>
								Clear
							</button>
							<button
								className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-1 px-2 rounded"
								onClick={handleApplyFilter}
							>
								Apply
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchForm;

"use client";

import { useState } from "react";

export default function ButtonGroup() {
	const [activeButton, setActiveButton] = useState("popular");

	const handleClick = (button) => {
		setActiveButton(button);
	};

	return (
		<div>
			{/* Buttons */}
			<button
				className={`${
					activeButton === "popular"
						? "bg-purple-600 text-white"
						: "bg-white text-gray-400"
				} py-2 px-4 rounded-l`}
				onClick={() => handleClick("popular")}
			>
				Popular
			</button>
			<button
				className={`${
					activeButton === "newest"
						? "bg-purple-600 text-white"
						: "bg-white text-gray-400"
				} py-2 px-4`}
				onClick={() => handleClick("newest")}
			>
				Newest
			</button>
			<button
				className={`${
					activeButton === "bookmarks"
						? "bg-purple-600 text-white"
						: "bg-white text-gray-400"
				} py-2 px-4 rounded-r`}
				onClick={() => handleClick("bookmarks")}
			>
				Bookmarks
			</button>
		</div>
	);
}

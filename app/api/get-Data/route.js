import axios from "axios";
import { NextResponse } from "next/server";

const uri =
	"https://physics-wallah-assignment-default-rtdb.firebaseio.com/.json";

export async function GET(request) {
	try {
		const { data } = await axios.get(uri);
		console.log(data);

		return new NextResponse(JSON.stringify(data), {
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error(error);

		return new NextResponse("Error fetching data", {
			status: 500,
			headers: {
				"Content-Type": "text/plain",
			},
		});
	}
}

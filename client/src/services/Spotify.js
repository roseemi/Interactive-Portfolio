// import axios from 'axios';
/* 
Add this line back to package.json if dynamic APIs will be used again in the future
"proxy": "https://localhost:5000",
*/

export default async function getSpotifyData(year) {
	try {
		/*  Benched for now: issues with server config in production
		const response = await fetch(`https://localhost:5000/stfyat?year=${year}`)
		if (!response.ok) {
			throw new Error('Failed to fetch');
		}

		const playlistResponse = await response.json();
		console.log(playlistResponse); */

		// Read one of the local files
		const response = await import(`./json/ManieMusicale${year}.json`)
		return await response
	}
	catch (error) {
		console.error(error);
	}
}
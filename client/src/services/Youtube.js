// Returns the requested playlist
export async function getPlaylist(year) {

	/*
	var id = null;
	switch (year) {
	  case "2024":
		id = "PLOEscDhei4DZqbiAUTL7H0D5EBHvcZTjw"
		break;
	  case "2023":
		id = "PLEavJ99WciNAsHrFEf3ZZQMuF3xYvZezP"
		break;
	  case "2022":
		id = "PLEavJ99WciNAJ2Iweb6596jshul9gZ2eE"
		break;
	  case "2021":
		id = "PLEavJ99WciNB6JBFA4UcnV86qrEQdiF2q"
		break;
	  case "2020":
		id = "PLEavJ99WciNAUOWpA513pzvUZZAbi1mhl"
		break;
	  case "2019":
		id = "PLEavJ99WciNB7yFcJRK3KT6WM56fKnhln"
		break;
	  case "2018":
		id = "PLEavJ99WciNDzjQhXQiNX8VTIHAjwVLsR"
		break;
	  case "2017":
	  default:
		id = "PLxSxAuY-OqpHVdJDq2OdeUmhSVHeyiy9t"
		break;
	}
  
	const url = `https://youtube-search-and-download.p.rapidapi.com/playlist?id=${id}`;
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': ${process.env.REACT_APP_RAPID_API_KEY},
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	  }
	};
  
	let jsonData;
	try {
	  await fetch(url, options)
		.then(function (u) { return u.json() })
		.then(function (json) { jsonData = json })
  
	} catch (error) {
	  console.error(error);
	}
	return jsonData;
	*/

	return playlist;
}
export async function getPlaylistYOUTUBE(year) {

	var id = null;
	switch (year) {
	  case "2024":
		id = "PLOEscDhei4DZqbiAUTL7H0D5EBHvcZTjw"
		break;
	  case "2023":
		id = "PLEavJ99WciNAsHrFEf3ZZQMuF3xYvZezP"
		break;
	  case "2022":
		id = "PLEavJ99WciNAJ2Iweb6596jshul9gZ2eE"
		break;
	  case "2021":
		id = "PLEavJ99WciNB6JBFA4UcnV86qrEQdiF2q"
		break;
	  case "2020":
		id = "PLEavJ99WciNAUOWpA513pzvUZZAbi1mhl"
		break;
	  case "2019":
		id = "PLEavJ99WciNB7yFcJRK3KT6WM56fKnhln"
		break;
	  case "2018":
		id = "PLEavJ99WciNDzjQhXQiNX8VTIHAjwVLsR"
		break;
	  case "2017":
	  default:
		id = "PLxSxAuY-OqpHVdJDq2OdeUmhSVHeyiy9t"
		break;
	}
	
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
  
	let jsonData;
	try {
	  await fetch(url)
		.then(function (u) { return u.json() })
		.then(function (json) { jsonData = json })
  
	} catch (error) {
	  console.error(error);
	}
	return jsonData;
}

export var playlist;
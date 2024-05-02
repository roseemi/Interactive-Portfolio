// import { Buffer } from 'buffer';
// Buffer.from('anything', 'base64');
// window.Buffer = window.Buffer || require("buffer").Buffer;
const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');

const port = 5000;
const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_KEY;
const client_secret = process.env.REACT_APP_SPOTIFY_SECRET_KEY;

// Set up rate limiter: maximum of twenty requests per minute
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 20,
});

// Run server on port 5000, client on 3000
app.listen(port, () => console.log("Server started on port 5000."))
// Allow cross origin resource sharing
app.use(cors());
// Apply rate limiter to all requests
app.use(limiter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});


// GET the Spotify access token
app.get("/stfyat", async (req, res) => {
    try {
        // Get the selected year from the query string
        const year = req.query.year;

        // Get access token
        const accessToken = await getAccessToken();

        // Use the access token to call another API
        const apiResponse = await getPlaylist(accessToken, year);
        
        // // Send the result back to the user
        res.send(apiResponse)

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// GET the token for the request before requesting the playlist
async function getAccessToken() {
    // First get the access token
    const data = {
        'grant_type': 'client_credentials',
    };

    const options = {
        method: 'POST',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify(data),
        headers:
        {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
        }
    };
    try{
        // Only return the access_token value of the JSON
        const response = await axios.request(options)
        return response.data.access_token;
    }
    catch(error) {
        console.error(error);
    };
}

// GET the playlist based on the year in the query string
async function getPlaylist(accessToken, year) {
    var id = null;
    
    switch (year) {
        case "2024":
            id = "2fmob4Hn1skiTOUb9b4Gt3"
            break;
        case "2023":
            id = "48mdyY6bWtuVabFIVaRcnR"
            break;
        case "2022":
            id = "01rRNah88ALTM6ME20ewXo"
            break;
        case "2021":
            id = "38uF6PlAcB8iFqxQQwExo3"
            break;
        case "2020":
            id = "2lsLTQQXocz90f9XvJTOUm"
            break;
        case "2019":
        default:
            id = "5gMOpwqLmWLStMxPXVqpQ6"
            break;
    }

    const options = {
                method: 'GET',
                url: `https://api.spotify.com/v1/playlists/${id}`,
                // url: `https://api.spotify.com/v1/playlists/2fmob4Hn1skiTOUb9b4Gt3`,
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            };

    try{
        const response = await axios.request(options)
        return response.data;
    }
    catch(error) {
        console.error("Error fetching playlist:", error);
    }
}

app.get('*', function (req, res) {
    res.send('../index.html')
})

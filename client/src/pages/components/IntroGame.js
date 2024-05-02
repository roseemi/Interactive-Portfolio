import { useRef } from "react";
import SpotifyData from '../../services/Spotify.js';

export default function IntroGame({toggleStartGameMode, setPlaylistYear, setPlaylist}) {
    const selectedPlaylist = useRef();
    const startGameButton = useRef();

    const setUpGame = async () => {
        // Get the selected playlist from the dropdown menu
        const year = selectedPlaylist.current.selectedOptions[0].value;
        setPlaylistYear(year);

        // Get the playlist based on what the user chose
        try {
            const playlist = await SpotifyData(year);
            setPlaylist(playlist);
        } catch (error) {
            console.log(error);
        }
        toggleStartGameMode();
    }

    return (
        <>
            <label className="text-5xl pb-2">Choose a Playlist:</label>
            <select 
                name="chosen-playlist" 
                id="chosen-playlist" 
                className="w-2/3 lg:w-1/3 mx-auto text-gray-800 m-10 p-2" 
                ref={selectedPlaylist}>
                    <option value="2024">Maine Musicale 2024</option>
                    <option value="2023">Maine Musicale 2023</option>
                    <option value="2022">Maine Musicale 2022</option>
                    <option value="2021">Maine Musicale 2021</option>
                    <option value="2020">Maine Musicale 2020</option>
                    <option value="2019">Maine Musicale 2019</option>
            </select>
            <button 
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-6 px-4 border border-gray-400 rounded shadow w-2/3 lg:w-1/3 mx-auto" 
                id="start-button" 
                onClick={setUpGame} 
                ref={startGameButton}>
            Start a New Game!
            </button>
        </>
    )
}
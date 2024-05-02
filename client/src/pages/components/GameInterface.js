import React, { useEffect, useState, useRef } from "react";
import defaultIcon from "../../assets/camera.svg";
import {
	PlaylistName, Round, Score, Thumbnail, NameOfArtistOrSong,
	ArtistOrSong, RemainingGuesses, UserAnswerResult
} from "./GameInterfaceChildComponents";

export default function GameInterface({ playlistYear, playlist, toggleGameComplete }) {
	// Reference for the text input box
	const userInput = useRef();

	// State handling for UI elements based on game progression
	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
	const [newRoundButtonDisabled, setNewRoundButtonDisabled] = useState(true);
	const [song, setSong] = useState(null);
	const [round, setRound] = useState(1);
	const [score, setScore] = useState(0);
	const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
	const [userAnswerResult, setUserAnswerResult] = useState("");
	const [scoreIncreaseBy, setScoreIncreaseBy] = useState(0);
	const [thumbnail, setThumbnail] = useState(defaultIcon);
	const [thumbnailBlur, setThumbnailBlur] = useState(30);
	const [artistOrSongTitle, setArtistOrSongTitle] = useState(null);
	const [artistOrSong, setArtistOrSong] = useState(null);
	const [remainingGuesses, setRemainingGuesses] = useState(3);

	var gameModePlaylist = playlist.tracks.items;

	// Set the attributes of the page to match the song
	// Executes on startup and when "Next Round" button is clicked
	useEffect(() => {
		try {
			// Setup UI and variables for a new round
			setNewRoundButtonDisabled(true);
			setRemainingGuesses(3);

			// Cycle through the entire playlist before ending the game
			if (round <= playlist.tracks.total) {
				getNewSong();
				// setRound(round => round + 1);
				userInput.current.value = "";
			}
			else {
				toggleGameComplete(score);
				setScore(0);
				round(0);
			}
		}
		catch (error) {
			setUserAnswerResult("Sorry! There was an error.");
		}
	}, [round]);

	// Disable the game if the user runs out of guesses
	// Execute every time there is an update to remainingGuesses
	useEffect(() => {
		// Determine if the guess was correct or not
		const isCorrect = isCorrectAnswer();	// Local use so the round can be terminated if isCorrectAnswer state does not change
		setIsAnswerCorrect(isCorrect);			// Global state use

		// Update thumbnail UI based on the num of guesses left
		updateThumbnailBlur(isCorrect);

		// User ran out of guesses and isCorrectAnswer state never to true changed = round over
		if (remainingGuesses === 0 && !isCorrect) {
			setScoreIncreaseBy(0);
			setUserAnswerResult("Arrondissez-vous!");
			setSubmitButtonDisabled(true);
			setNewRoundButtonDisabled(false);
		}
		else if (remainingGuesses === 3) setUserAnswerResult("");	// New round - reset result to blank
		else if (!isCorrect) setUserAnswerResult("Faux!");
	}, [remainingGuesses]);

	// Update UI depending on whether the answer was correct or not
	// Executes after the remainingGuesses useEffect()
	useEffect(() => {
		if (isAnswerCorrect) correctAnswerRender();					// Render the correct answer UI
	}, [isAnswerCorrect]);

	// Retrieve a new random song from the playlist
	// Executes once during a new round
	const getNewSong = () => {
		try {
			var randomNumber = Math.floor(Math.random() * gameModePlaylist.length);	// Select a random song from the playlist by index
			var newSong = gameModePlaylist[randomNumber].track; 					// Get the song by index and save it

			setSong(newSong);											// Set the song's state
			updateArtistOrSong(Math.floor(Math.random() * 2), newSong); // 0 = Guess the Artist && 1 = Guess the Song
			setSubmitButtonDisabled(false);
			setThumbnail(newSong.album.images[0].url);					// Change the img to the thumbnail
			updateThumbnailBlur();										// Reset thumbnail blur
			setUserAnswerResult("");									// Reset results from user answer
			gameModePlaylist.splice(randomNumber, 1)					// Remove this song from the playlist
		}
		catch (error) {
			setUserAnswerResult("Sorry! There was an error.");
		}
	};

	// Inform the user what to guess this round
	const updateArtistOrSong = (num, newSong) => {
		setArtistOrSong(num);
		// 0 = guess the artist
		if (num === 0) {
			setArtistOrSongTitle(newSong.artists[0].name);
		}
		// 1 = guess the song
		else {
			setArtistOrSongTitle(newSong.name);
		}
	};

	// Decrease the amount of guesses left
	// Executes only when "Submit Answer" button is clicked
	const updateRemainingGuesses = () => {
		setRemainingGuesses(prevGuesses => prevGuesses - 1);
	};

	// Change the blur depending on how many guesses are left/if the answer was correct
	const updateThumbnailBlur = (isAnswerCorrect) => {
		if (!isAnswerCorrect) {
			switch (remainingGuesses) {
				case 3:
					setThumbnailBlur("blur3")
					break;
				case 2:
					setThumbnailBlur("blur2")
					break;
				case 1:
					setThumbnailBlur("blur1")
					break;
				case 0:
				default:
					setThumbnailBlur("blur0")
					break;
			}
		}
		else setThumbnailBlur("blur0");
	}

	// Update the UI and score if the user guessed correctly
	const correctAnswerRender = () => {
		setUserAnswerResult("Correct!");					// Tell the user they're correct
		setScoreIncreaseBy(remainingGuesses + 1);
		setScore(score => score + (remainingGuesses + 1))	// Increase the total score based on how many guesses were left
		setSubmitButtonDisabled(true);						// Disable "submit" button so user goes to next round			
		setNewRoundButtonDisabled(false);					// Enable the new round button
	}

	const isCorrectAnswer = () => {
		const input = userInput.current.value.trim().toLowerCase()
		
		// If this is an artist name round
		if (artistOrSong === 0 && song !== null) {
			const correctAnswer = song.artists[0].name.toLowerCase().replaceAll("’", "'");

			if (correctAnswer === input && input !== "") return true;
			else return false;
		}
		// If this is a song name round
		else if (song !== null) {
			const correctAnswer = song.name.toLowerCase()
			
			if (correctAnswer === input && input !== "") return true;
			else return false;
		}
	};

	return (
		<div className="max-h-11/12">
			<PlaylistName 
				playlist={playlist} 
			/>
			<Round 
				round={round} 
				playlist={playlist} 
			/>
			<Score 
				score={score} 
				scoreIncreaseBy={scoreIncreaseBy} 
			/>
			<div className="rounded justify-center">
				<Thumbnail 
					thumbnail={thumbnail} 
					thumbnailBlur={thumbnailBlur} 
				/>
				<NameOfArtistOrSong 
					artistOrSongTitle={artistOrSongTitle}
					isAnswerCorrect={isAnswerCorrect} 
					remainingGuesses={remainingGuesses} 
				/>
			</div>
			<RemainingGuesses 
				remainingGuesses={remainingGuesses} 
			/>
			<ArtistOrSong 
				artistOrSong={artistOrSong} 
			/>
			<input
				className="shadow appearance-none border rounded w-5/6 lg:w-2/3 mx-auto my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="answer"
				type="text"
				placeholder="Qu'est-ce que c'est!?"
				onKeyDown={(e) => {
					if (e.key === "Enter" && !submitButtonDisabled)
						updateRemainingGuesses();
					}}
				ref={userInput} />
			<UserAnswerResult userAnswerResult={userAnswerResult} />
			<button
				className="bg-white w-2/3 lg:w-1/3 mx-auto hover:bg-gray-100 disabled:bg-slate-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
				id="answer-button"
				onClick={(updateRemainingGuesses)}
				disabled={submitButtonDisabled}>
				Soumettre La Réponse
			</button>
			<button
				className="bg-white w-2/3 lg:w-1/3 my-4 mx-auto hover:bg-gray-100 disabled:bg-slate-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded block shadow"
				id="next-round-button"
				onClick={() => setRound(round => round + 1)}
				disabled={newRoundButtonDisabled}>
				Tour Suivant
			</button>
		</div>
	);
}

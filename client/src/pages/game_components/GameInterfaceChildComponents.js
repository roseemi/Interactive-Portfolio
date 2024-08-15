import { useEffect, useRef } from 'react';
import '../../styles/game.css';

export function PlaylistName({ playlist }) {
	return (
		<p id="playlist-name" className="text-[#ec2a83]">Playlist: <b><i>{playlist.name}</i></b></p>
	);
}

export function Round({ round, playlist }) {
	return (
		<p id="round">Ronde {round} / {playlist.tracks.total}</p>
	);
}

export function Score({ score, scoreIncreaseBy }) {

	const scoreTotal = useRef()
	const scoreIncreaseElement = useRef()

	// Every time the score changes, play an animation
	useEffect(() => {
		if(scoreIncreaseBy !== 0 || scoreIncreaseBy === null) {
			scoreTotal.current.classList.remove('inflate-animation');
			setTimeout(() => {
				scoreTotal.current.classList.add('inflate-animation');
			  }, 10);
			scoreIncreaseElement.current.classList.add('rise-and-fade-animation');
			setTimeout(() => {
				scoreIncreaseElement.current.classList.remove('rise-and-fade-animation');
			  }, 1000);
		}
		  
	}, [score])


	return (
		<h3 id="score">Total Score: 
			<span ref={scoreTotal} id='score-element'> {score}</span>
			<span ref={scoreIncreaseElement} id='score-increase' className='rise-and-fade'>+{scoreIncreaseBy}</span>
		</h3>
	);
}

export function Thumbnail({ thumbnail, thumbnailBlur }) {
	return (
		<div className='py-10'>
			<img
				src={thumbnail}
				className={thumbnailBlur}
				id="thumbnail"
				alt="Thumbnail of a music video."
			/>
		</div>
	);
}

export function NameOfArtistOrSong({ artistOrSongTitle, isAnswerCorrect, remainingGuesses }) {
	var displayMode = 'none';
	if (remainingGuesses === 0 || isAnswerCorrect) displayMode = 'block';

	return (
		<p id="artistOrSongTitle" style={{display: displayMode}}>{artistOrSongTitle}</p>
	);
}

export function ArtistOrSong({ artistOrSong }) {
	var text = null;
	// 0 = guess the artist
	if (artistOrSong === 0) {
		text = `Devinez l'artiste!`;
	}
	// 1 = guess the song
	else {
		text = `Devine la chanson!`;
	}

	return (
		<p id="artistOrSong"><b className="text-[#ec2a83]">{text}</b></p>
	);
}

export function RemainingGuesses({ remainingGuesses }) {
	return (
		<p id="remaining-guesses">Suppositions restantes: <i className="text-[#ec2a83]">{remainingGuesses}</i></p>
	);
}

export function UserAnswerResult({ userAnswerResult }) {
	return (
		<p id="result">{userAnswerResult}</p>
	);
}
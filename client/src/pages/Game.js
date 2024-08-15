import '../styles/game.css';
import GameInterface from '../../src/pages/game_components/GameInterface.js';
import IntroGame from '../../src/pages/game_components/IntroGame.js';
import GameComplete from '../../src/pages/game_components/GameComplete.js';
import { useState } from 'react';
// import { create } from 'zustand';

export default function Game() {
	
	const [startNewGame, setStartNewGame] = useState(false);
	const [gameComplete, setGameComplete] = useState(false);
	const [playlist, setPlaylist] = useState(null);
	const [playlistYear, setPlaylistYear] = useState(null);
	const [totalScore, setTotalScore] = useState(0);

	const toggleStartGameMode = async () => {
		setStartNewGame(true);
		setGameComplete(false);
	};
	const toggleGameComplete = (score) => {
		setGameComplete(true);
		setTotalScore(score);
	};
	const toggleNewGame = () => {
		setStartNewGame(false);
		setGameComplete(false);
		setTotalScore(0);
	};

	/*
	Attempted rewriting with zustand library.
	Ended up being more code and complex than before, so I stuck with vanilla useState

	const useGameStages = create((set) => ({
		startNewGame: false,
		gameComplete: false,
		playlist: null,
		playlistYear: null,
		totalScore: 0,
	
		setPlaylist: (selectedPlaylist) => set({ playlist: selectedPlaylist }),
		setPlaylistYear: (year) => set({ playlistYear: year }),
		toggleStartGameMode: async () => {
			useGameStages.setState({startNewGame: true, gameComplete: false})
		},
		toggleGameComplete: (score) => set({ gameComplete: true, totalScore: score }),
		toggleNewGame: () => set({ startNewGame: false, gameComplete: false, totalScore: 0 }),
	}));

	const startNewGame = useGameStages((state) => state.startNewGame);
	const gameComplete = useGameStages((state) => state.gameComplete);
	const playlist = useGameStages((state) => state.playlist);
	const playlistYear = useGameStages((state) => state.playlistYear);
	const totalScore = useGameStages((state) => state.totalScore);
	const setPlaylist = useGameStages((state) => state.setPlaylist);
	const setPlaylistYear = useGameStages((state) => state.setPlaylistYear);
	const toggleStartGameMode = useGameStages((state) => state.toggleStartGameMode);
	const toggleGameComplete = useGameStages((state) => state.toggleGameComplete);
	const toggleNewGame = useGameStages((state) => state.toggleNewGame); 
	*/

	return (
		<>
			<section className="bg-[#cbd5e1]">
				<div className="flex h-dvh content-center items-center box-border">
					<div className="mx-auto max-w-2xl">
						<div className="text-center">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Qu'est-ce que c'est!?
							</h1>
							<p className="mt-6 text-3xl leading-8 text-gray-600">
								Guess the name of the song or artist based on the album art! Gain more points based on how many tries it took for you or your team to guess correctly.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="#game-body"
									className="rounded-md bg-[#ec2a83] px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Start the game
								</a>
								<a href="#game-rules" className="font-semibold leading-6 text-gray-900">
									Learn more <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>

				</div>
			</section>
			<section id="game-body" className="flex min-h-dvh justify-center items-center text-center box-border">
				<div className="flex flex-col max-h-11/12 w-full lg:w-1/2 gap-4 m-10 p-10 bg-opacity-10 bg-white rounded-lg shadow-lg box-border">
					{!startNewGame && !gameComplete && 
					<IntroGame 
						toggleStartGameMode={toggleStartGameMode} 
						setPlaylistYear={setPlaylistYear} 
						setPlaylist={setPlaylist} 
					/>}
					{startNewGame && !gameComplete && 
					<GameInterface
						playlist={playlist} 
						playlistYear={playlistYear} 
						toggleGameComplete={toggleGameComplete} 
						/>}
					{startNewGame && gameComplete && 
					<GameComplete 
						totalScore={totalScore} 
						toggleNewGame={toggleNewGame} 
					/>}
				</div>
			</section>
			<section id="game-rules" className="bg-[#cbd5e1]">
				<div className="h-1/2 mx-auto">
					<div className="mx-auto w-1/2">
						<div className="text-gray-600 py-40">
							<h3 className="text-[#ec2a83] border-b-2 border-b-[#ec2a83] p-0 mb-14">Game Rules</h3>
							<h4 className="text-[#000836] text-left my-8">Objective</h4>
							<p className="text-gray-600">
								Try to correctly guess as many of the songs and artists as you can! Playlists are taken from Maine Musicale's yearly playlists as a fun way to prepare for voting, and learning a bit of french.
							</p>
							<h4 className="text-[#000836] text-left my-8">Rules</h4>
							<ul className="list-inside list-disc">
								<li>Click "start game" to begin.</li>
								<li>A random song on the playlist will be chosen and an image of the album art will display.</li>
								<li>You will 3 guesses to answer the question.</li>
								<li>The question will ask for either the artist or the song name (chosen at random)</li>
								<li><b>Guesses must match the exact spelling, including accents</b>.</li>
								<li>Upper/lowercase spelling does not impact your score.</li>
								<li>Submit your answer by clicking "submit".</li>
								<li>The amount of points you earn depends on how many guesses you have left.</li>
								<li>Ex: If you have 3 guesses left when you guess correctly, you gain 3 points.</li>
								<li>The game is over when you have run out of songs on the playlist.</li>
								<li>Whoever has the most points after the whole playlist has been tested, wins!</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
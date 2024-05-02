export default function GameComplete({totalScore, toggleNewGame}) {

    const setUpNewGame = () => {
        toggleNewGame();
    }
    
    return (
        <>
        <h1>GAME COMPLETE</h1>
        <h4>Your total score: {totalScore}</h4>
        <button className="w-fit block bg-pink-700 hover:bg-violet-700 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-violet-900 rounded mx-auto" onClick={setUpNewGame}>Start a New Game</button>
        </>
    )
}
export default function Popup({ isWon, isLose, word, currPos, words, setCurrPos, setIsWon, setIsLose, setWrongLetters, setRightLetters }) {
	function nextWord() {

		if (currPos === words.length - 1) {
			setCurrPos(0);
		} else
			setCurrPos(prevState => prevState + 1);
		setRightLetters([]);
		setWrongLetters([]);
		setIsWon(false);
		setIsLose(false);

	}


	return (
		<div className="popup-container" style={isWon == true || isLose == true ? { display: 'flex' } : { display: 'none' }} id="popup-container">
			<div className="popup">
				<h2 id="final-message">{isWon ? 'Вы выйграли!' : 'Вы проиграли'}</h2>
				<h3 id="final-message-reveal-word">Правильное слово: {word}</h3>
				<button id="play-button" onClick={nextWord}>Играть заново</button>
			</div>
		</div>
	)

}
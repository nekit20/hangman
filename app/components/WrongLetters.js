export default function WrongLetters({ wrongLetters }) {
	return (
		<div className="wrong-letters-container">
			<div id="wrong-letters">
				<p>Неправильные буквы</p>
				{wrongLetters.map((letter, index) => <span key={index}>{letter},</span>)}
			</div>
		</div>
	)

}
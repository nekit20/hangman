export default function WrongLetters({ wrongLetters }) {
	return (
		<div className="wrong-letters-container">
			<div id="wrong-letters">
				<p>Неправильные буквы</p>
				{wrongLetters.map(letter => <span>{letter},</span>)}
			</div>
		</div>
	)

}
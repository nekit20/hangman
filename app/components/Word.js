export default function Word({ word, rightLetters }) {
	const arr = word.split('');


	return (
		<div className="word" id="word">
			{arr.map(item => <div className='letter'>{rightLetters.includes(item.toLowerCase()) ? item : ''}</div>)}
		</div>
	)

}
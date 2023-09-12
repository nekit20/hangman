export default function Word({ word, rightLetters }) {
	const arr = word.split('');


	return (
		<div className="word" id="word">
			{arr.map((item, index) => <div className='letter' key={index}>{rightLetters.includes(item.toLowerCase()) ? item : ''}</div>)}
		</div>
	)

}
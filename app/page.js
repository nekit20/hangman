'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import { useEffect, useState } from 'react'
import Popup from './components/Popup'

const words = [{
  id: 1,
  question: 'Столица России',
  answer: 'Москва'
},
{
  id: 2,
  question: 'Фамилия автора книги "Портрет Дориана Грея"',
  answer: 'Уайльд'
},
{
  id: 3,
  question: 'Часть тела, соединяющая голову с туловищем',
  answer: 'Шея'
},
{
  id: 4,
  question: 'Домашняя птица, самка петуха',
  answer: 'Курица'
}

];

export default function Home() {
  const [rightLetters, setRightLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [currPos, setCurrPos] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isLose, setIsLose] = useState(false);




  function handleKey(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key.toLowerCase();

      if (words[currPos].answer.toLowerCase().includes(letter)) {
        if (!rightLetters.includes(letter))
          setRightLetters([...rightLetters, letter]);
      } else {
        if (!wrongLetters.includes(letter))
          setWrongLetters([...wrongLetters, letter]);
      }
    }
  }


  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < words[currPos].answer.length; i++) {
      if (rightLetters.includes(words[currPos].answer.split('')[i].toLowerCase())) {
        sum = sum + 1;
      }
    }
    if (sum === words[currPos].answer.length) {
      setIsWon(true);
    }

  }, [rightLetters])

  useEffect(() => {
    if (wrongLetters.length >= 6) {
      setIsLose(true);

    }
  }, [wrongLetters]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });




  return (
    <div style={{ textAlign: 'center' }}>
      <Header key='header'></Header >
      <Figure key='figure' wrongLetters={wrongLetters}></Figure>
      <WrongLetters key='wrongletters' wrongLetters={wrongLetters}></WrongLetters>
      <h1 style={{ marginTop: 'auto' }}>{words[currPos].question}</h1>
      <Word key={words[currPos].id} rightLetters={rightLetters} word={words[currPos].answer}></Word>
      <Popup setRightLetters={setRightLetters} setWrongLetters={setWrongLetters} key='popup' isLose={isLose} currPos={currPos} setIsLose={setIsLose} setIsWon={setIsWon} setCurrPos={setCurrPos} words={words} isWon={isWon} word={words[currPos].answer}></Popup>
    </div>
  )
}

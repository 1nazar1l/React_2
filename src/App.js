import Game from "./game.jsx"
import "./App.css"
import { useState } from "react";
import Result from "./Result.jsx";

function App() {

  const questions = [ 
    { 
      title: "React - это … ?", 
      variants: ["библиотека", "фреймворк", "приложение"], 
      correct: 0, 
    }, 
    { 
      title: 'Компонент - это … ', 
      variants: ["приложение", "часть приложения или страницы", "то, что я не знаю что такое"], 
      correct: 1, 
    }, 
    { 
      title: "Что такое JSX?", 
      variants: [ 
        "Это простой HTML", 
        "Это функция", 
        "Это тот же HTML, но с возможностью выполнять JS-код", 
      ], 
      correct: 2, 
    }];
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const question = questions[step]
    function handleClick(index){
      setStep(step+1)
      if (index == question.correct) {
        setCorrect(correct+1)
      }
    }
    return (
      <div className="App">
        {step !== questions.length ? (
          <Game question={question} questions={questions} handleClick={handleClick} step={step}/>
        ):(
          <Result correct={correct} questions={questions}/> 
        )}
      </div>
    );
}

export default App;

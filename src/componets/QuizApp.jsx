import React, { useState } from 'react'
import data from "../mock/quiz.json"
import FinalScore from './finalScore';
import "./QuizStyles.css"

const QuizApp = () => {
    const [quizConter, setQuizConter] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const {questions} = data
    console.log(questions)
    const selectedQuestion = (isCorrect) => {
        if(isCorrect === true){
                setScore(score + 1)
                console.log(score)
            }
        if(quizConter < questions.length-1){
        setQuizConter((prevState => prevState+=1))
            
        }else{
            setShowScore(true)
        }
    }

return (
    <div className="quizContainer">
        {
            showScore ? <FinalScore score={score} questions={questions}/>
            :  
            <>
                <div>
                    {<h3>Pregunta {quizConter}/{questions.length}</h3>}
                </div>
                <div>
                    <h3 className="questionName">{questions[quizConter].questionText}</h3>
                </div>
                <div className="quizAnswers">
                    {questions[quizConter].ansewerOptions.map(question => (
                    <button onClick={() => selectedQuestion(question.isCorrect)}>{question.answerText}</button>
                    ))}
                </div>
            </>
        }
        
    </div>
)
}

export default QuizApp
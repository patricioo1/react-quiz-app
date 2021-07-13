import React, { useEffect, useState } from 'react';
import FinishButton from './FinishButton';

const QuizContent = (props) => {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0)
    const [trueAnswer, setCorrectAnswer] = useState()
    const [dirty, setDirty] = useState(false)
    const [elementClicked, setElementClicked] = useState(false)
    const [lastQuestion, setLastQuestion] = useState(false)
    const [finishQuiz, setFinishQuiz] = useState(false)

    const questionState = items[questionIndex];
    const allAnswers = questionState?.answers;
    const correctAnswer = questionState?.correctAnswer;

    useEffect(() => {
        setCorrectAnswer(correctAnswer)
    }, [correctAnswer])

    useEffect(() => {
        setDirty(false)
    }, [questionIndex])

    const selectCorrectAnswer = (e) => {
        const clickUser = e.target.value;
        setDirty(true)
        if (clickUser === correctAnswer) {
            console.log(clickUser + ' to prawidłowa odpowiedź')
            setCorrectAnswer(clickUser)
        } else {
            console.log('Prawidłowa odpowiedź to ' + trueAnswer)
        }
    }

    const elementWasClicked = () => {
        setElementClicked(true)
    }

    const checkClickedAnswer = (answer) => {
        if (dirty === false) {
            return ' ';
        } else {
            return answer === correctAnswer ? 'correct' : 'wrong'
        }
    }

    const handleAnswerClick = () => {
        setQuestionIndex(questionIndex + 1)
    }

    const checkLastQuestion = () => {
        if (items.length - 1 === questionIndex) {
            setLastQuestion(true)
        }
    }

    const finishQuizContent = () => {
        setFinishQuiz(true)
        console.log('POSZŁO')
      }

    useEffect(() => {
        const questionsApi = `https://raw.githubusercontent.com/patricioo1/react-quiz-app/main/questions.json`
        fetch(questionsApi)
            .then(res => res.json())
            .then(result => {
                setItems(result);
            },
                (error) => {
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div><p>Error</p></div>
    } else {
        return (
            <div className='quizContainer'>
                {finishQuiz ? props.onFinish() : ''}
                <div className="quizQuestion">
                    <h3>{questionState?.question}</h3>
                </div>
                <div className="quizAnswers">
                    {allAnswers?.map(answer => {
                        return (
                            <button value={answer} key={answer} className={`answerButton ${checkClickedAnswer(answer)}`} onClick={(e) => {selectCorrectAnswer(e); elementWasClicked(); checkLastQuestion()
                            }}>{answer}</button>
                        )
                    })}
                </div>
                {elementClicked ? <button className={`nextButton ${lastQuestion ? 'hiddenClass' : ''}`} onClick={() => {handleAnswerClick(); setElementClicked(false)}}>NASTĘPNE</button> : ''}
                {lastQuestion ? <FinishButton onClick={finishQuizContent} /> : ''}
            </div>
        )
    }
}

export default QuizContent;
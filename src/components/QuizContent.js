import React, { useEffect, useState } from 'react';
import FinishButton from './FinishButton';
import FinalResult from './FinalResult';

const QuizContent = (props) => {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0)
    const [trueAnswer, setCorrectAnswer] = useState()
    const [dirty, setDirty] = useState(false)
    const [elementClicked, setElementClicked] = useState(false)
    const [lastQuestion, setLastQuestion] = useState(false)
    const [finishQuiz, setFinishQuiz] = useState(false)
    const [score, setScore] = useState(1)
    const [preventButton, setPreventButton] = useState(true)
    const [userName, setUserName] = useState([])

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
        if (clickUser === correctAnswer && preventButton) {
            console.log(clickUser + ' to prawidłowa odpowiedź')
            setCorrectAnswer(clickUser);
            setScore(score + 1)
            console.log(score)
            props.onSelect(score)
            setPreventButton(false)
        } else {
            console.log('Prawidłowa odpowiedź to ' + trueAnswer)
            setPreventButton(false)
        }
    }

    const elementWasClicked = () => {
        setElementClicked(true)
    }

    const checkClickedAnswer = (answer) => {
        if (dirty === false) {
            return ' ';
        } else {
            return answer === correctAnswer ? 'correct' : 'wrong';
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
      }

    const getUserName = () => {
        setUserName([userName.push(props.onChange)])
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
    } else if (finishQuiz) {
        return (
            <FinalResult onChange={score} onCheck={getUserName} />
        )}
        else {
        return (
            <div className={`quizContainer ${finishQuiz ? 'hiddenClass' : ''}`}>
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
                {elementClicked ? <button className={`nextButton ${lastQuestion ? 'hiddenClass' : ''}`} onClick={() => {handleAnswerClick(); setElementClicked(false); setPreventButton(true)}}>NASTĘPNE</button> : ''}
                {lastQuestion ? <FinishButton onClick={finishQuizContent} /> : ''}
            </div>
        )
    }
}

export default QuizContent;
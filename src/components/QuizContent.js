import React, { useEffect, useState } from 'react';
import FinishButton from './FinishButton';
import FinalResult from './FinalResult';

const QuizContent = (props) => {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0)
    const [dirty, setDirty] = useState(false)
    const [elementClicked, setElementClicked] = useState(false)
    const [score, setScore] = useState(1)
    const [preventButton, setPreventButton] = useState(true)
    // const [userName, setUserName] = useState()

    const questionState = items[questionIndex];
    const allAnswers = questionState?.answers;
    const correctAnswer = questionState?.correctAnswer;
    const isLastQuestion = (items.length - 1) === questionIndex;
    const finishQuiz = questionIndex > (items.length - 1)

    useEffect(() => {
        setDirty(false)
    }, [questionIndex])

    const selectCorrectAnswer = (e) => {
        const clickUser = e.target.value;
        setDirty(true)
        if (clickUser === correctAnswer && preventButton) {
            console.log(clickUser + ' to prawidłowa odpowiedź')
            setScore(score + 1)
            console.log(score)
            props.onSelect(score)
            setPreventButton(false)
        } else {
            console.log('Prawidłowa odpowiedź to ' + correctAnswer)
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
        if (isLastQuestion) {
            return;
        }
    }

    const finishQuizContent = () => {
        if (finishQuiz) {
            return finishQuiz;
        }
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
            <>
            <FinalResult onChange={score} onCheck={props.onChange} />
            </>
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
                {elementClicked && !isLastQuestion ? <button className='nextButton' onClick={() => {handleAnswerClick(); setElementClicked(false); setPreventButton(true)}}>NASTĘPNE</button> : ''}
                {isLastQuestion && elementClicked? <FinishButton onClick={() => {finishQuizContent(); handleAnswerClick()}} /> : ''}
            </div>
        )
    }
}

export default QuizContent;
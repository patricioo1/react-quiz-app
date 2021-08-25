import React, { useEffect, useState } from 'react';
import FinishButton from './FinishButton/FinishButton';
import FinalResult from './FinalResult/FinalResult';

const QuizContent = ({onScore, score, userName}) => {
    const [error, setError] = useState(null);
    const [items, setItems] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0)
    const [dirty, setDirty] = useState(false)

    const questionState = items[questionIndex];
    const allAnswers = questionState?.answers;
    const correctAnswer = questionState?.correctAnswer;
    const isLastQuestion = (items.length - 1) === questionIndex;
    const finishQuiz = questionIndex > (items.length - 1)
    const isFinished = (questionIndex > (items.length - 1)) && items.length > 0;


    useEffect(() => {
        setDirty(false)
    }, [questionIndex])

    const selectCorrectAnswer = (e) => {
        const clickUser = e.target.value;
        setDirty(false)
        if (clickUser === correctAnswer && !dirty) {
            console.log(clickUser + ' to prawidłowa odpowiedź')
            onScore()
            setDirty(true)
        } else {
            console.log('Prawidłowa odpowiedź to ' + correctAnswer)
            setDirty(true)
        }
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
    } else if (isFinished) {
        return (
            <>
            <FinalResult score={score} userName={userName} />
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
                            <button value={answer} key={answer} className={`answerButton ${checkClickedAnswer(answer)}`} onClick={(e) => {selectCorrectAnswer(e); setDirty(true)
                            }}>{answer}</button>
                        )
                    })}
                </div>
                {dirty && !isLastQuestion ? <button className='nextButton' onClick={() => {handleAnswerClick()}}>NASTĘPNE</button> : ''}
                {isLastQuestion && dirty ? <FinishButton onClick={() => handleAnswerClick()} /> : ''}
            </div>
        )
    }
}

export default QuizContent;
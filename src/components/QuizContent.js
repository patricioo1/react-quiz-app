import React, { useEffect, useState } from 'react';

const QuizContent = () => {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0)
    // const [trueAnswer, setCorrectAnswer] = useState(true)

    const questionState = items[questionIndex];
    const allAnswers = questionState?.answers;
    const correctAnswer = questionState?.correctAnswer;

    // const detectUserAnswer = (e) => {
    //     const clickUser = e.target.value;
    //     console.log(clickUser)
    // }

    const selectCorrectAnswer = (e) => {
        allAnswers.forEach((answer) => {
            const clickUser = e.target.value;
            console.log(clickUser)
            if (clickUser === correctAnswer) {
                console.log('Prawidłowa odpowiedź')
            } else {
                console.log('Nieprawidłowa odpowiedź')
            }
        });
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
                // console.log(result)
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
            <div className="quizContainer">
                <div className="quizQuestion">
                    <h3>{questionState?.question}</h3>
                </div>
                <div className="quizAnswers">
                    {questionState?.answers.map(answer => {
                    return (
                        <button value={answer} key={answer} className="answerButton" onClick={(e) => { handleAnswerClick(); selectCorrectAnswer(e) }}>{answer}</button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default QuizContent;
import React, { useState } from 'react';

const QuizContent = () => {


    return (
        <div className="quizContainer">
            <div className="quizQuestion">
                <h3>To jest testowe pytanie</h3>
            </div>
            <div className="quizAnswers">
                <button className="answerButton">Odpowiedź 1</button>
                <button className="answerButton">Odpowiedź 2</button>
                <button className="answerButton">Odpowiedź 3</button>
                <button className="answerButton">Odpowiedź 4</button>
            </div>
        </div>
    )

}

export default QuizContent;
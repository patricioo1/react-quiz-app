import React, { useState } from 'react'

const FinishButton = (props) => {
    const [finalResult, setFinalResult] = useState(false)


    const pointsResult = () => {
        setFinalResult(true)
    }


    return (
        <div>
            <button className={`finishButton ${finalResult ? 'hiddenClass' : ''}`} onClick={() => {pointsResult(); props.onClick()}}>ZAKOŃCZ</button>
        </div>
    )
}

export default FinishButton;
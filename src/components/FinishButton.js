import React, { useState } from 'react'

const FinishButton = (props) => {
    const [finalResult, setFinalResult] = useState(false)


    const summaryPoints = () => {
        setFinalResult(true)
    }


    return (
        <div>
            <button className={`finishButton ${finalResult ? 'hiddenClass' : ''}`} onClick={() => {summaryPoints(); props.onClick()}}>ZAKOŃCZ</button>
        </div>
    )
}

export default FinishButton;
import React from 'react'

const FinishButton = ({onClick}) => {


    return (
        <div>
            <button className='finishButton' onClick={() => onClick()}>ZAKOŃCZ</button>
        </div>
    )
}

export default FinishButton;
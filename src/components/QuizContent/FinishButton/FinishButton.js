import React from 'react'

const FinishButton = (props) => {


    return (
        <div>
            <button className='finishButton' onClick={() => props.onClick()}>ZAKOŃCZ</button>
        </div>
    )
}

export default FinishButton;
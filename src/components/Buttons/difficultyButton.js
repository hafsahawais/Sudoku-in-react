import React from "react";


const Button = ({handleDifficulty}) => {
    return (
        <>
        <button onClick={() => handleDifficulty('easy')}>easy</button>
        <button onClick={() => handleDifficulty('medium')}>medium</button>
        <button onClick={() => handleDifficulty('hard')}>hard</button>
        </>
    )
}

export default Button;
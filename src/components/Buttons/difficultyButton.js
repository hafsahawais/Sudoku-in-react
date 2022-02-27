import React from "react";
import Button from '@mui/material/Button';
import './button.css'

const DifficultyButton = ({handleDifficulty}) => {
    return (
        <>
        <Button variant='text' color='success' onClick={() => handleDifficulty('easy')}>easy</Button>
        <Button variant='text' color='success' onClick={() => handleDifficulty('medium')}>medium</Button>
        <Button variant='text' color='success' onClick={() => handleDifficulty('hard')}>hard</Button>
        <Button variant='text' color='success' onClick={() => handleDifficulty('random')}>random</Button>
        </>
    )
}

export default DifficultyButton;
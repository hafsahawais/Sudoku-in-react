import React from "react";
import Button from '@mui/material/Button';


const SolveButton = ({solve}) => {

    return (
        <Button variant='outlined' color='success'  onClick={solve}>solve</Button>
    )

}

export default SolveButton;
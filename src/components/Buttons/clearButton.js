import React from "react";
import Button from '@mui/material/Button';


const ClearButton = ({clear}) => {

    return (
        <Button variant='outlined' color='success'  onClick={clear}>clear</Button>
    )

}

export default ClearButton;
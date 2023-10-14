import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../redux/actions'

function TextFieldComponent() {
    const dispatch = useDispatch()
    function handleChange(e) {
        dispatch(handleAmountChange(e.target.value))
    }
    return (
        <Box mt={3} width={"100%"}>
            <FormControl fullWidth>
                <TextField
                    variant={"outlined"}
                    label={"Amount of Questions"}
                    type={"number"}
                    size={"small"}
                    onChange={handleChange}
                />
            </FormControl>
        </Box>
    )
}

export default TextFieldComponent
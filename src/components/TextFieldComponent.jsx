import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'

function TextFieldComponent() {
    function handleChange() {
        console.log('input field change yey!')
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
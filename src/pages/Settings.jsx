import React from 'react'
import SelectField from '../components/SelectField'
import { Box, Button } from '@mui/material'
import TextFieldComponent from '../components/TextFieldComponent'

function Settings() {
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <SelectField label={"Category"} />
            <SelectField label={"Difficulty"} />
            <SelectField label={"Type"} />
            <TextFieldComponent />
            <Box mt={3} width={"100%"}>
                <Button variant={"contained"} type="submit" fullWidth>Get Started</Button>
            </Box>
        </form>
    )
}

export default Settings
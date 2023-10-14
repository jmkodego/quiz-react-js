import React from 'react'
import SelectField from '../components/SelectField'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import TextFieldComponent from '../components/TextFieldComponent'
import useAxios from '../hooks/useAxios'
import { difficultyOptions, typeOptions } from '../constants'
import { useNavigate } from 'react-router-dom'

function Settings() {
    const { response, error, loading } = useAxios({ url: "/api_category.php" })


    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        navigate('/questions')
    }
    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    if (error) {
        return (
            <Typography variant={"h6"} mt={20} color={"red"}>
                Something went wrong. Please try again!
            </Typography>
        )
    }



    return (
        <form onSubmit={handleSubmit}>
            <SelectField options={response.trivia_categories} label={"Category"} />
            <SelectField options={difficultyOptions} label={"Difficulty"} />
            <SelectField options={typeOptions} label={"Type"} />
            <TextFieldComponent />
            <Box mt={3} width={"100%"}>
                <Button variant={"contained"} type="submit" fullWidth>Get Started</Button>
            </Box>
        </form>
    )


}

export default Settings
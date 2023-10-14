import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleScoreChange } from '../redux/actions'

function FinalScore() {
    const score = useSelector(state => state.score)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function handleBackToSettings() {
        dispatch(handleScoreChange(0))
        navigate('/')
    }
    return (
        <Box mt={30}>
            <Typography variant={"h3"} fontWeight={"bold"} mb={3}>Final Score: {score}</Typography>
            <Button variant={"contained"} onClick={handleBackToSettings}>Back to Settings</Button>
        </Box>
    )
}

export default FinalScore
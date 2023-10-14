import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { decode } from 'html-entities'
import { handleScoreChange } from '../redux/actions'


function genRandomNumber(max) {
    return Math.floor(Math.random() * max)
}
function Questions() {
    const { questionCategory, questionDifficulty, questionType, amountOfQuestion, score } = useSelector(state => state)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [options, setOptions] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()


    let apiUrl = `api.php?amount=${amountOfQuestion}`

    if (questionCategory) {
        apiUrl = apiUrl.concat(`&category=${questionCategory}`)
    }

    if (questionDifficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`)
    }

    if (questionType) {
        apiUrl = apiUrl.concat(`&type=${questionType}`)
    }

    const { response, loading } = useAxios({ url: apiUrl })
    useEffect(() => {
        if (response?.results.length) {
            const question = response.results[questionIndex]
            let answers = [...question.incorrect_answers]
            answers.splice(genRandomNumber(question.incorrect_answers.length), 0, question.correct_answer)
            setOptions(answers)
        }
    }, [response, questionIndex])


    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }


    function handleClickAnswer(e) {
        const question = response?.results[questionIndex]
        if (e.target.textContent === question.correct_answer) {
            dispatch(handleScoreChange(score + 1))
        }
        if (questionIndex + 1 < response?.results.length) {
            setQuestionIndex(questionIndex + 1)
        } else {
            navigate('/score')
        }
    }

    return (
        <Box>
            <Typography variant={"h4"}>Questions {questionIndex + 1}</Typography>
            <Typography mt={5}>{decode(response?.results[questionIndex].question)}</Typography>
            {options.map((data, id) => (
                <Box mt={2} key={id}>
                    <Button variant={"contained"} onClick={handleClickAnswer}>{decode(data)}</Button>
                </Box>
            ))}

            <Box mt={5}>
                {`Score: ${score} / ${response?.results.length}`}
            </Box>
        </Box>
    )
}

export default Questions
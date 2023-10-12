import React from 'react'
import Questions from './pages/Questions'
import Score from './pages/FinalScore'
import Settings from './pages/Settings'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Box, Container, Typography } from '@mui/material';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Typography variant="h4" fontWeight={'bold'}>CodeRunners Quiz Application</Typography>
        <Settings />
      </>
    )
  },
  {
    path: "questions",
    element: <Questions />,
  },
  {
    path: "score",
    element: <Score />,
  },
]);

function App() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <RouterProvider router={router} />
      </Box>
    </Container>

  )
}

export default App
import React from 'react'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'

import Chart from '../components/Header'

const Home = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                <Typography variant='h2' color='secondary'>
                    Opensea Visualizer
                </Typography>
            </Box>
            <Box>

            </Box>
        </Container>
    )
}

export default Home
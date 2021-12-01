import React from 'react'
import { Container, Typography, Paper } from '@mui/material'
import { Box } from '@mui/system'

import Chart from '../components/Chart'
import TopCollection from '../components/TopCollection'

const Home = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                <Typography variant='h2' color='secondary'>
                    Opensea Visualizer
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <TopCollection/>
            </Box>
        </Container>
    )
}

export default Home
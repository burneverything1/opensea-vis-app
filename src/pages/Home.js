import React from 'react'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'

import TopCollection from '../components/TopCollection'

const Home = () => {

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                <Typography variant='h2' color='secondary'>
                    Top OpenSea Collections
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <TopCollection/>
            </Box>
        </Container>
    )
}

export default Home
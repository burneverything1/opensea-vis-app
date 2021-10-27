import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, IconButton, TextField, Toolbar, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home'

const Header = () => {
    const [searchCol, setSearchCol] = useState('')

    let history = useHistory()

    const handleSearchChange = (event) => {
        setSearchCol(event.target.value)
    }

    const submitSearch = (event) => {
        if (event.key === 'Enter') {
            console.log('enter key pressed');
            // submit search
            history.push('/collection')
            setSearchCol('')
        }
    }

    const handleHomeClick = (event) => {
        history.push('/')
    }

    return (
        <AppBar position='static'>
            <Toolbar sx={{
                width: '98%',
                margin: '0 auto',
                justifyContent: 'space-between'
            }}>
                <Box sx={{ width: '25%', display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                    <IconButton onClick={handleHomeClick}>
                        <HomeIcon fontSize='large' color='secondary'/>
                    </IconButton>
                    <TextField id="outlined" label="Search for Collection" variant="outlined"
                        size='small'
                        sx={{ width: '80%'}}
                        value={searchCol}
                        onChange={handleSearchChange}
                        onKeyPress={submitSearch}
                    />
                </Box>
                <IconButton>
                    <MenuIcon fontSize='large' color='secondary'/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header
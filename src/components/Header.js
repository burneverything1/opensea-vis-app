import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, IconButton, TextField, Toolbar, Box, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home'

const Header = () => {
    const [searchCol, setSearchCol] = useState('')

    let history = useHistory()

    const handleSearchChange = (event) => {
        setSearchCol(event.target.value)
    }

    const submitSearch = (event) => {
        if (event.key === 'Enter' && searchCol.substring(0, 2) === '0x')  {
            history.push(`/collection/${searchCol}`)
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
                    <Tooltip title='Use Contract Address that starts with 0x' arrow placement='bottom'>
                        <TextField id="outlined" label="Search for Collection Address" variant="outlined"
                            size='small'
                            sx={{ width: '80%'}}
                            value={searchCol}
                            onChange={handleSearchChange}
                            onKeyPress={submitSearch}
                        />
                    </Tooltip>
                </Box>
                <IconButton>
                    <MenuIcon fontSize='large' color='secondary'/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header
import React from 'react'
import { AppBar, IconButton, TextField, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar sx={{
                width: '98%',
                margin: '0 auto',
                justifyContent: 'space-between'
            }}>
                <TextField id="outlined" label="Search for Collection" variant="outlined" size='small' 
                sx={{ width: '20%'}}/>
                <IconButton>
                    <MenuIcon fontSize='large' color='secondary'/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header
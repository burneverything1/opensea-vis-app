import React, { useState } from 'react'
import { Container, Typography, Button, Popover } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import TwitterIcon from '@mui/icons-material/Twitter'
import WebIcon from '@mui/icons-material/Web'

import Chart from '../components/Chart'


const Collection = () => {
    const [linkOpen, setLinkOpen] = useState(null)

    return(
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <Button sx={{visibility: 'hidden'}}>
                </Button>
                <Typography variant='h2' color='secondary'>
                    Entropes
                </Typography>
                <Button variant="contained" onClick={e => setLinkOpen(e.currentTarget)}>
                Links
                </Button>
                <Popover
                open={linkOpen}
                onClose={e => setLinkOpen(null)}
                anchorEl={linkOpen}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                >
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TwitterIcon />
                                </ListItemIcon>
                                <ListItemText primary='Twitter' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WebIcon />
                                </ListItemIcon>
                                <ListItemText primary='OpenSea' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Popover>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <Chart/>
            </Box>
        </Container>
    )
}

export default Collection
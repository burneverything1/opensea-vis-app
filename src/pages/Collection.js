import React, { useState } from 'react'
import { Container, Typography, Button, Popover } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import TwitterIcon from '@mui/icons-material/Twitter'

import Chart from '../components/Chart'


const Collection = () => {
    const [linkOpen, setLinkOpen] = useState(null)

    return(
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                <Typography variant='h2' color='secondary'>
                    Entropes
                </Typography>
            </Box>
            <Box>
                <Button variant="contained" onClick={e => setLinkOpen(e.currentTarget)}>
                Open Popover
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
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TwitterIcon />
                                </ListItemIcon>
                                <ListItemText primary='Twitter' />
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
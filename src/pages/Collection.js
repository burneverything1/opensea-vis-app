import React, { useState, useEffect } from 'react'
import { Container, Typography, Button, Popover, TextField } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import TwitterIcon from '@mui/icons-material/Twitter'
import WebIcon from '@mui/icons-material/Web'

import Chart from '../components/Chart'

import contractService from '../services/contract'


const Collection = () => {
    const [linkOpen, setLinkOpen] = useState(null)
    const [searchCol, setSearchCol] = useState(null)
    const [collectionDets, setCollectionDets] = useState(null)

    // get collection
    /*useEffect(() => {
        contractService
            .sendContractMQ('0xF8C08433DD41eAeE2e424C9E91467aB27772d9ec')
            .then(contractData => {
                setCollectionDets(contractData)
                console.log(contractData);
            })
    }, [])*/

    const handleSearchChange = (event) => {
        setSearchCol(event.target.value)
    }

    const submitSearch = (event) => {
        contractService('0xF8C08433DD41eAeE2e424C9E91467aB27772d9ec')
            .then(contractData => {
                setCollectionDets(contractData)
                console.log(contractData);
            })
    }

    return(
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <Button sx={{visibility: 'hidden'}}>
                </Button>
                <TextField id="outlined" label="Enter Collection" variant="outlined"
                    size='small'
                    sx={{ width: '80%'}}
                    value={searchCol}
                    onChange={handleSearchChange}
                    onKeyPress={submitSearch}
                />
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
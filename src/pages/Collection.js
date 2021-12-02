import React, { useState, useEffect } from 'react'
import { Container, Typography, Button, Popover } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import TwitterIcon from '@mui/icons-material/Twitter'
import WebIcon from '@mui/icons-material/Web'

import CollectionDisplay from '../components/CollectionDisplay'

import contractService from '../services/contract'


const Collection = () => {
    const [linkOpen, setLinkOpen] = useState(null)
    const [collectionName, setCollectionName] = useState('')
    const [colAddress, setColAddress] = useState('')
    const [colDiscordUrl, setColDiscordUrl] = useState('')

    const { add } = useParams()

    // get data about collection from url param and disperse to state variables
    useEffect(() => {
        contractService
            .getContractData(add)
            .then(contractData => {
                console.log(contractData);
                setCollectionName(contractData.collection.name)
                setColAddress(contractData.address)
                setColDiscordUrl(contractData.collection.discord_url)
            })
    }, [add])

    return(
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <Button sx={{visibility: 'hidden'}}>
                </Button>
                <Typography variant='h2' color='secondary'>
                    {collectionName}
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
            <Box>
                <CollectionDisplay
                    collection_address={colAddress}
                    col_discord_url={colDiscordUrl}
                />
            </Box>
        </Container>
    )
}

export default Collection
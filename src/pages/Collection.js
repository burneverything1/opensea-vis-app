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
    const [contractData, setContractData] = useState('')

    const { add } = useParams()

    useEffect(() => {
        contractService
            .getContractData(add)
            .then(contractData => {
                console.log(contractData);
                setCollectionName(contractData.collection.name)
                setContractData(contractData)
            })
    }, [add])

    return(
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <Button sx={{visibility: 'hidden'}}>
                </Button>
                <Typography variant='h2' color='secondary'>
                    {collectionName} Details
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
                    <List sx={{ backgroundColor: 'primary' }}>
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
                    contract_data={contractData}
                />
            </Box>
        </Container>
    )
}

export default Collection
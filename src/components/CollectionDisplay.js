import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const CollectionDisplay = ({ collection_address, col_discord_url }) => {
    const [colAddress, setColAddress] = useState(collection_address)
    const [colDiscordUrl, setColDiscordUrl] = useState(col_discord_url)

    
    // update row data after props are passed from api call
    useEffect(() => {
        setColAddress(collection_address)
    }, [collection_address])

    useEffect(() => {
        setColDiscordUrl(col_discord_url)
    }, [col_discord_url])

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Stat</TableCell>
                    <TableCell align='right'>Data</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key='address'>
                    <TableCell>Address</TableCell>
                    <TableCell align='right'>{colAddress}</TableCell>
                </TableRow>
                <TableRow key='discord'>
                    <TableCell>Discord</TableCell>
                    <TableCell align='right'>{colDiscordUrl}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default CollectionDisplay
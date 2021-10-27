import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'


const TopCollection = () => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Collection Name</TableCell>
                        <TableCell>Rank</TableCell>
                        <TableCell>Avg Price</TableCell>
                        <TableCell>Volume last 24h</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
}

export default TopCollection
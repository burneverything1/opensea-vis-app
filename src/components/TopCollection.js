import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Tooltip } from '@mui/material'
import React from 'react'

function createData(name, rank, price, vol) {
    return { name, rank, price, vol };
}
  
const rows = [
    createData('Entropes', 1, 0.3, 76),
    createData('Hidden in Noise', 2, 0.82, 107),
    createData('CryptoMutts', 3, 0.05, 10),
];

const TopCollection = () => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Collection Name</TableCell>
                        <TableCell>Rank</TableCell>
                        <Tooltip title='Average Price over last 7 days' arrow placement='top-start'>
                            <TableCell>Avg Price</TableCell>
                        </Tooltip>
                        <Tooltip title='Average Volume over last 7 days' arrow placement='top-start'>
                            <TableCell>Daily Volume</TableCell>
                        </Tooltip>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow>
                            <TableCell component='th'>{row.name}</TableCell>
                            <TableCell>{row.rank}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.vol}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TopCollection
import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'

import collectionService from '../services/top_collection'

function createData(name, rank, price, vol) {
    return { name, rank, price, vol };
}

const TopCollection = () => {
    const [topCollections, setTopCollections] = useState(null)

    useEffect(() => {
        collectionService
            .getTopCollections()
            .then(collectionData => {
                setTopCollections(collectionData)
            })
    }, [])

    const createRows = (topCollections) => {
        let displayArr = []

        displayArr = topCollections.map((collection) => {
            return createData(collection[2], collection[0], collection[5], collection[4])
        })

        return displayArr.map((row) => (
            <TableRow key={row.name}>
                <TableCell component='th'>{row.name}</TableCell>
                <TableCell>{row.rank}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.vol}</TableCell>
            </TableRow>
        ))
    }

    return (
        <TableContainer sx={{ maxHeight: 600 }}>
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
                    {topCollections ? createRows(topCollections) : null }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TopCollection
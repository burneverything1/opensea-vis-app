import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const CollectionDisplay = ({ collection_Data }) => {
    const [collectionData, setCollectionData] = useState(collection_Data)

    

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Info</TableCell>
                    <TableCell align='right'>Result</TableCell>
                </TableRow>
            </TableHead>
            <TableBody></TableBody>
        </Table>
    )
}

export default CollectionDisplay
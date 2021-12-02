import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const CollectionDisplay = ({ contract_data }) => {
    const [contractData, setContractData] = useState(null)

    useEffect(() => {
        setContractData(contract_data)
    }, [contract_data])

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
                    <TableCell align='right'>{contractData ? contractData.address : null}</TableCell>
                </TableRow>
                <TableRow key='discord'>
                    <TableCell>Discord</TableCell>
                    <TableCell align='right'>{contractData ? contractData.collection.discord_url : null}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default CollectionDisplay
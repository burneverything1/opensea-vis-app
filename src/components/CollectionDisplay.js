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
                <TableRow key='website'>
                    <TableCell>Website</TableCell>
                    <TableCell align='right'>{contractData ? contractData.external_link : null}</TableCell>
                </TableRow>
                <TableRow key='contract_type'>
                    <TableCell>Asset Contract Type</TableCell>
                    <TableCell align='right'>{contractData ? contractData.asset_contract_type : null}</TableCell>
                </TableRow>
                <TableRow key='ERC_standard'>
                    <TableCell>ERC Standard</TableCell>
                    <TableCell align='right'>{contractData ? contractData.schema_name : null}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default CollectionDisplay
import axios from 'axios'
const baseUrl = '/api/contract'

const getContractData = async (contract_add) => {
    const response = await axios.get(`http://localhost:3000${baseUrl}/${contract_add}`)
    return response.data
}

export default {
    getContractData
}
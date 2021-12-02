import axios from 'axios'
const baseUrl = '/api/collection'

const getTopCollections = async () => {
    const response = await axios.get('http://localhost:3000/api/collection')
    return response.data
}

export default {
    getTopCollections
}
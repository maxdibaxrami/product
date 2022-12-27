import axios from 'axios'

const client = axios.create({
    baseURL: "https://fakestoreapi.com",
})
  
const getAllProducts = async () => {
    const { data } = await client.get(`/products?limit=7`)
    return data
}

export {getAllProducts}
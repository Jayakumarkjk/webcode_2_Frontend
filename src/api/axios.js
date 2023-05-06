import axios from "axios";

export const api = axios.create({
    baseURL: "https://webcode2-lpc4.onrender.com/api"

})

export const getProducts = async () => {
    const response = await api.get("/products")
    return response.data
}
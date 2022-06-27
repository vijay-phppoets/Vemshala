import cnf from '../config'
import axios from 'axios'
import { getToken } from "../utils";

export const getWishlistApi = async (params) => {
    const response = await axios({
        method: 'get',
        url: `${cnf.api.base_url}wishlist/list`,
        params: params,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${getToken()}`
        }
    })
    return response
}

export default getWishlistApi
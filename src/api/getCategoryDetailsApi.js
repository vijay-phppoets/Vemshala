import cnf from '../config'
import axios from 'axios'

export const getCategoryDetailsApi = async (params) => {

    const response = await axios({
        method: 'get',
        url: `${cnf.api.base_url}category/details`,
        params: params,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    return response
}

export default getCategoryDetailsApi
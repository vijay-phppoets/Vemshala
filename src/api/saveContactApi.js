import cnf from '../config'
import axios from 'axios'
import { getToken } from "../utils";

export const saveContactApi = async (params) => {

    const response = await axios({
        method: 'post',
        url: `${cnf.api.base_url}contact/create`,
        data: params,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${getToken()}`
        }
    })

    return response
}

export default saveContactApi
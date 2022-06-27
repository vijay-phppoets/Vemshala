import cnf from '../config'
import axios from 'axios'

export const getProductListApi = async (params) => {
    console.log('hello params', params);
    try {
        const response = await axios({
            method: 'get',
            url: `${cnf.api.base_url}product/list`,
            params: params,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })

        return response
    } catch (error) {
    }

}

export default getProductListApi
import axios from 'axios'
import { REST_SERVER } from '../../config'

export default {
    getTitles: () => {
        return axios.get(`${REST_SERVER}/titles`);
    }
}


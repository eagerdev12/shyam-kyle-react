import { client } from "../client"
import { GET_TITLES } from "./title.query"

export default {
    getTitles: async () => {
        return client.query({
            query: GET_TITLES
        })
    }
}
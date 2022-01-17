const HOST = "https://btnconnectapi.myorigin.net/graphql"
const AUTH = "Bearer 2b1QVM4xIxZ0JcKoPjJfWtOnfhcqwD4T"
import { GraphQLClient } from 'graphql-request';


const request = async (query, token, variables = {}, headers = {},) => {
    console.log('TOKEN', token)
    headers["Authorization"] = AUTH
    if(token){
        headers["x-token"] = token
    }
    const client = new GraphQLClient(HOST, { headers });
    try {
        return await client.request(query, variables);
    } catch (e) {
        if (e.message === 'SESSION_EXPIRED') {
        }
        const message = e?.response?.errors[0]?.message || 'Error';
        return message
        throw new Error(message);
    }
};

export default {
    request,
}
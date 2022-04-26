import API from '../graphQL'
import Store from '../store';

export const homecareGetCheckInRangeTimeOptions = async (key, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const TIME = `
            query {
                homecareGetCheckInRangeTimeOptions{
                    value
                    name
                }
            }`;
            getHomecareGetCheckInRangeTimeOptions(TIME, token, cb)
    })
}

const getHomecareGetCheckInRangeTimeOptions = async (TIME, token, cb) => {
    const result = await API.request(TIME, token);
    console.log(result)
    cb(result)
}

export default {
    homecareGetCheckInRangeTimeOptions
}
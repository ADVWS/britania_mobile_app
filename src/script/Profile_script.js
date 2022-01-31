import API from '../graphQL'
import Store from "../store"

export const userUpdateProfile = async (email, mobileNo, name, key, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const UPDATE = `mutation {
            userUpdateProfile(email: "${email}", mobileNo: "${mobileNo}", name: "${name}") {
                name
                mobileNo
                email
            }
        }`;
        updateUser(UPDATE, token, cb)
    })
}

export const updateUser = async(UPDATE, token, cb) => {
    const result = await API.request(UPDATE, token);
    cb(result)
}

export default {
    userUpdateProfile,
}
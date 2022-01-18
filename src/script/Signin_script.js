import API from '../graphQL'

export const getProfileOtp = async (id, cb) => {
    const OTP = `
        query {
            getProfileOtp(id: "${id}"){
                id 
                mobileNo 
                email
            }
        }
    `;
    try {
        const result = await API.request(OTP);
        console.log('OTP', result)
        cb(result)
    } catch (error) {
        cb('error')
    }
}

export default {
    getProfileOtp
}
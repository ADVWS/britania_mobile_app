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
    console.log('OTP')
    const result = await API.request(OTP);
    cb(result)
}

export default {
    getProfileOtp
}
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
    console.log('POSTDATA::', OTP)
    const result = await API.request(OTP);
    console.log('RESULT===>', result)
    cb(result)
}

export default {
    getProfileOtp
}
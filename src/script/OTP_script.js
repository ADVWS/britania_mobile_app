import API from '../graphQL'

export const sendOTP = async (mobile, email, Type, cb) => {
    if (Type === 'MOBILE' || Type === 'mobile') {
        var OTP = `
            mutation {
                sendMobileOtp(mobileNo: "${mobile}"){
                    id
                    type
                    sendTo
                    refNo
                }
            }
        `;
    } else if(Type === 'EMAIL' || Type === 'email') {
        var OTP = `
            mutation {
                sendEmailOtp(email: "${email}"){
                    id
                    type
                    sendTo
                    refNo
                }
            }
        `;
    }
    const result = await API.request(OTP);
    cb(result)
}

export default {
    sendOTP
}
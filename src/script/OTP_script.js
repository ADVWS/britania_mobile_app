import API from '../graphQL'

export const sendOTP = async (mobile, email, Type, cb) => {
    console.log(Type)
    if (Type === 'MOBILE') {
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
    } else if(Type === 'EMAIL') {
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
    console.log('RESULT===>', result)
    cb(result)
}

export default {
    sendOTP
}
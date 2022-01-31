import API from '../graphQL'

export const login = async (profile, otp, cb) => {
    const LOGIN = `
        mutation {
            login(
                id: "${profile.getProfileOtp.id}",
                otp: "${otp}",
                refNo: "${profile.OTP.refNo}",
                sendTo: "${profile.OTP.sendTo}"
            ){
                token
                refreshToken
                user {
                    id
                    name
                }
            }
        }
    `;
    const result = await API.request(LOGIN);
    console.log('RESULT OTP===>', result)
    cb(result)
}

const setProfile = async (token, cb) => {
    var project = `{
        me {
            id
            name
            email
            mobileNo
            status
            unitsOwner {
                id
                projectName
                unitNumber
                houseNumber
            }
        }
    }`;
    const result = await API.request(project, token);
    console.log('RESULT---===>', result)
    cb(result)
}

export default {
    login,
    setProfile
}
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
    cb(result)
}

const setProfile = async (token, cb) => {
    const project = `{
        me {
            id
            name
            email
            mobileNo
            status
            nationType
            idcard
            passport
            unitsOwner {
                id
                projectName
                projectId
                unitNumber
                houseNumber
                unitId
                userId
                allowHomecare
                memberStatus
                insuranceExpiryDate
                ownerType
                     expiredDate
                  memberStatus
            }
            allowMenuHomecare
            unitsAllowHomecare {
              id
              userId
              unitId
              houseNumber
              unitNumber
              projectId
              projectName
              project {
                id
                name
                nameEng
                projectType
                projectImageSrc
              }
              unit {
                id
                unitNumber
                houseNumber
                titledeedArea
                model {
                  id
                  name
                  nameEng
                }
              }
              unitText
              ownerType
              expiredDate
              allowHomecare
              memberStatus
              insuranceExpiryDate
            }
            profileImage
            }
        }`;
    const result = await API.request(project, token);
    cb(result)
}

export default {
    login,
    setProfile
}
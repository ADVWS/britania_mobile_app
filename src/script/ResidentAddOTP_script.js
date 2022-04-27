import API from '../graphQL'
import Store from '../store';

export const memberConfirmOtp = async (otp, data, key, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const OTP = `
            mutation {
                memberConfirmOtp(
                    unitId: "${data.unitId}",
                    otp: "${otp}",
                    refNo: "${data.refNo}",
                    sendTo: "${data.mobileNo}"
                ){
                id
                unitMemberId
                memberId
                name
                email
                nationType
                idcard
                passport
                memberStatus
                ownerType
                expiredDate
                allowHomecare
                }
            }
        `;
        sendOTP(OTP, token, data, cb)
    })
}

export const sendOTP = async (OTP, token, data, cb) => {
    const result = await API.request(OTP, token);
    if(typeof result === "object"){
        updateUnit(token, data, cb)
    } else {
        cb(result)
    }
}

export const updateUnit = async (token, data, cb) => {
    const UNIT = `query {
    unitMemberAll(unitId: "${data.unitId}") {
            id,
            unitMemberId,
            name,
            mobileNo,
            email,
            ownerType,
            nationType,
            memberStatus,
            idcard,
            passport,
            expiredDate,
            allowHomecare,
            profileImage
        }
    }`
    const result = await API.request(UNIT, token);
    const unitMember = result
    unitMember.unitMemberAll = result.unitMemberAll
    unitMember.tenant = []
    unitMember.resident = []
    for (let i = 0; i < unitMember.unitMemberAll.length; i++) {
        if (unitMember.unitMemberAll[i].ownerType === 'tenant') {
            unitMember.unitMemberAll[i].unitid = data.unitId
            unitMember.tenant.push(unitMember.unitMemberAll[i])
        } else {
            unitMember.unitMemberAll[i].unitid = data.unitId
            unitMember.resident.push(unitMember.unitMemberAll[i])
        }
    }
    cb(result)
}

export default {
    memberConfirmOtp
}
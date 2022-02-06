import API from '../graphQL'
import Store from "../store"

export const memberUpdateAllowHomecare = async (edit, key, unitid, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const EDIT = `
            mutation {
                memberUpdateAllowHomecare(allowHomecare: ${edit.allowHomecare}, unitMemberId:"${edit.unitMemberId}"){
                    unitMemberId
                    allowHomecare
                }
            }
        `;
        updateMember(EDIT, token, unitid, cb)
    })
}


export const updateMember = async (EDIT, token, unitid, cb) => {
    console.log(EDIT)
    const result = await API.request(EDIT, token);
    console.log('RESULT UPDATE===>', result)
    updateUnit(token, unitid, cb)
    //cb(result)
}

export const updateUnit = async (token, unitid, resend, cb) => {
    const UNIT = `query {
    unitMemberAll(unitId: "${unitid}") {
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
            allowHomecare
        }
    }`
    const result = await API.request(UNIT, token);
    const unitMember = result
    unitMember.unitMemberAll = result.unitMemberAll
    unitMember.tenant = []
    unitMember.resident = []
    for (let i = 0; i < unitMember.unitMemberAll.length; i++) {
        if (unitMember.unitMemberAll[i].ownerType === 'tenant') {
            unitMember.unitMemberAll[i].unitid = unitid
            unitMember.tenant.push(unitMember.unitMemberAll[i])
        } else {
            unitMember.unitMemberAll[i].unitid = unitid
            unitMember.resident.push(unitMember.unitMemberAll[i])
        }
    }
    cb(unitMember)
}

export const memberDeleteProfile = async (unitMemberId, key, unitid, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const REMOVE = `
            mutation {
                memberDeleteProfile(unitMemberId: "${unitMemberId}")
            }
        `;
        updateMember(REMOVE, token, unitid, cb)
    })
}

export const memberResendOtp = async (token, mobileNo, unitid, cb) => {
    const OTP = `
        mutation {
            memberResendOtp(sendTo: "${mobileNo}", unitId: "${unitid}"){
                id
                type
                sendTo
                refNo
            }
        }
    `;
    const result = await API.request(OTP, token);
    cb(result.memberResendOtp)
}


export default {
    memberUpdateAllowHomecare,
    memberDeleteProfile,
    memberResendOtp
}
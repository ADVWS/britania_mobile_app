import API from '../graphQL'
import Store from "../store"
import Script from "../script"

export const memberUpdateProfile_thai = async (edit, key, unitid, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const EDIT = `
            mutation {
                memberUpdateProfile(input: {
                    name : "${edit.name}",
                    mobileNo: "${edit.mobileNo}",
                    unitMemberId: "${edit.unitMemberId}",
                    nationType: ${edit.nationType},
                    email: "${edit.email}",
                    idcard: "${edit.idcard}",
                    expiredDate: "${edit.expiredDate}",
                }){
                    name
                    mobileNo
                    email
                    nationType
                    idcard
                    passport
                    expiredDate
                    unitMemberId
                }
            }
        `;
        updateMember(EDIT, token, unitid, cb)
    })
}

export const memberUpdateProfile_foreign = async (edit, key, unitid, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const EDIT = `
        mutation {
            memberUpdateProfile(input: {
                name : "${edit.name}",
                mobileNo: "${edit.mobileNo}",
                unitMemberId: "${edit.unitMemberId}",
                nationType: ${edit.nationType},
                email: "${edit.email}",
                idcard: "${edit.idcard}",
                passport: "${edit.passport}",
                expiredDate: "${edit.expiredDate}",
            }){
                name
                mobileNo
                email
                nationType
                idcard
                passport
                expiredDate
            }
        }
    `;
        updateMember(EDIT, token, unitid, cb)
    })
}

export const updateMember = async (EDIT, token, unitid, cb) => {
    console.log(EDIT)
    const result = await API.request(EDIT, token);
    console.log('RESULT OTP===>', result)
    updateUnit(token, unitid, cb)
    //cb(result)
}

export const updateUnit = async (token, unitid, cb) => {
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
    console.log('this unitMember', unitMember)
    for (let i = 0; i < unitMember.unitMemberAll.length; i++) {
        if (unitMember.unitMemberAll[i].ownerType === 'tenant') {
            unitMember.unitMemberAll[i].unitid = unitid
            unitMember.tenant.push(unitMember.unitMemberAll[i])
        } else {
            unitMember.resident.push(unitMember.unitMemberAll[i])
        }
    }
    console.log('unitMember', unitMember)
    cb(unitMember)
}


export default {
    memberUpdateProfile_thai,
    memberUpdateProfile_foreign
}
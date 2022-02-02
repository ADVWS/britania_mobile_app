import moment from 'moment'
import API from '../graphQL'
import Store from "../store"

export const memberAddProflie_thai = async (add, key, unitid, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        console.log(token)
        const ADD = `
            mutation {
                memberAddProflie(input: {
                    unitId : "${add.unitId}",
                    ownerType: ${add.ownerType},
                    nationType: ${add.nationType},
                    name: "${add.name}",
                    mobileNo: "${add.mobileNo}",
                    email: "${add.email}",
                    idcard: "${add.idcard}",
                    passport: null,
                    expiredDate: "${new Date(add.expiredDate)}"
                }){
                    id
                    type
                    sendTo
                    refNo
                }
            }
        `;
        updateMember(ADD, token, unitid, cb)
    })
}

export const memberAddProflie_foreign = async (add, key, unitid, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const ADD = `
            mutation {
                memberAddProflie(input: {
                    unitId : "${add.unitId}",
                    ownerType: ${add.ownerType},
                    nationType: ${add.nationType},
                    name: "${add.name}",
                    mobileNo: "${add.mobileNo}",
                    email: "${add.email}",
                    idcard: null,
                    passport: "${add.idcard}",
                    expiredDate: "${new Date(add.expiredDate)}"
                }){
                    id
                    type
                    sendTo
                    refNo
                }
            }
        `;
        updateMember(ADD, token, unitid, cb)
    })
}

export const updateMember = async (ADD, token, unitid, cb) => {
    console.log(ADD)
    const result = await API.request(ADD, token);
    console.log('RESULT ADD===>', result)
    if(typeof result === 'object'){
        var otp = result.memberAddProflie
        updateUnit(token, unitid, otp, cb)
    } else {
        cb(result)
    }
    //cb(result)
}

export const updateUnit = async (token, unitid, otp, cb) => {
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
    var respone = {
        unitUpdate: unitMember,
        otp: otp
    }
    cb(respone)
}


export default {
    memberAddProflie_thai,
    memberAddProflie_foreign
}
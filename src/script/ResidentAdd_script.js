import API from '../graphQL'
import Store from "../store"

export const memberAddProflie_thai = async (add, key, unitid, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        if(add.files){
            var ADD = `
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
                        memberImage: {
                            fileId: "${add.files.fileId}"
                            fileCurName: "${add.files.fileCurName}"
                            filePrevName: "${add.files.filePrevName}"
                            fileExtension: "${add.files.fileExtension}"
                        }
                    }){
                        id
                        type
                        sendTo
                        refNo
                    }
                }
            `;
        } else {
            var ADD = `
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
                    }){
                        id
                        type
                        sendTo
                        refNo
                    }
                }
            `;
        }
        updateMember(ADD, token, unitid, cb)

    })
}

export const memberAddProflie_foreign = async (add, key, unitid, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        if(add.files){
            var ADD = `
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
                        memberImage: {
                            fileId: "${add.files.fileId}"
                            fileCurName: "${add.files.fileCurName}"
                            filePrevName: "${add.files.filePrevName}"
                            fileExtension: "${add.files.fileExtension}"
                        }
                    }){
                        id
                        type
                        sendTo
                        refNo
                    }
                }
            `;
        } else {
            var ADD = `
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
                    }){
                        id
                        type
                        sendTo
                        refNo
                    }
                }
            `;
        }
        updateMember(ADD, token, unitid, cb)
    })
}

export const updateMember = async (ADD, token, unitid, cb) => {
    const result = await API.request(ADD, token);
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
        //updateMemberResendOTP(OTP, token, unitid, cb)
        const result = await API.request(OTP, token);
        console.log('OTP', result)
        cb(result)
}

export const updateMemberResendOTP = async (OTP, token, cb) => {
    const result = await API.request(OTP, token);
    console.log('OTP', result)
    cb(result.memberResendOtp)
}


export default {
    memberAddProflie_thai,
    memberAddProflie_foreign,
    memberResendOtp
}
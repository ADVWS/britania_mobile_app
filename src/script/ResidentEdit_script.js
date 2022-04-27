import API from '../graphQL'
import Store from "../store"

export const memberUpdateProfile_thai = async (edit, key, unitid, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        if(edit.files){
            var EDIT = `
                mutation {
                    memberUpdateProfile(input: {
                        name : "${edit.name}",
                        mobileNo: "${edit.mobileNo}",
                        unitMemberId: "${edit.unitMemberId}",
                        nationType: ${edit.nationType},
                        email: "${edit.email}",
                        idcard: "${edit.idcard}",
                        expiredDate: "${edit.expiredDate}",
                        memberImage: {
                            fileId: "${edit.files.fileId}"
                            fileCurName: "${edit.files.fileCurName}"
                            filePrevName: "${edit.files.filePrevName}"
                            fileExtension: "${edit.files.fileExtension}"
                        }
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
        } else {
            var EDIT = `
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
        }
        updateMember(EDIT, token, unitid, cb)
    })
}

export const memberUpdateProfile_foreign = async (edit, key, unitid, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        if(edit.files){
            var EDIT = `
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
                        memberImage: {
                            fileId: "${edit.files.fileId}"
                            fileCurName: "${edit.files.fileCurName}"
                            filePrevName: "${edit.files.filePrevName}"
                            fileExtension: "${edit.files.fileExtension}"
                        }
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
        } else {
            var EDIT = `
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
        }
        updateMember(EDIT, token, unitid, cb)
    })
}

export const updateMember = async (EDIT, token, unitid, cb) => {
    const result = await API.request(EDIT, token);
    updateUnit(token, unitid, cb)
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
    cb(unitMember)
}


export default {
    memberUpdateProfile_thai,
    memberUpdateProfile_foreign
}
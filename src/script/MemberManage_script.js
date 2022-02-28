import API from '../graphQL'
import Store from "../store"

export const unitMemberAll = async (unit, key, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const UNIT = `query {
        unitMemberAll(unitId: "${unit.id}") {
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
        setData(UNIT, token, unit, cb)
    })
}

export const setData = async (UNIT, token, unit, cb) => {
    const result = await API.request(UNIT, token);
    const unitMember = result
    unitMember.unitMemberAll = result.unitMemberAll
    unitMember.tenant = []
    unitMember.resident = []
    console.log('setData==>', unitMember.unitMemberAll.length)
    for (let i = 0; i < unitMember.unitMemberAll.length; i++) {
        if (unitMember.unitMemberAll[i].ownerType === 'tenant') {
            unitMember.unitMemberAll[i].unitid = unit.id
            unitMember.tenant.push(unitMember.unitMemberAll[i])
        } else {
            unitMember.unitMemberAll[i].unitid = unit.id
            unitMember.resident.push(unitMember.unitMemberAll[i])
        }
    }
    cb(unitMember)
}

export default {
    unitMemberAll,
}
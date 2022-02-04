import API from '../graphQL'
import Store from "../store"

export const homecareAllCase = async (unitOwnerId, key, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const ALLCASE = `
            query {
                homecareAllCase(unitOwnerId: "${unitOwnerId}") {
                    id
                    caseNumber
                        project {
                        id
                        name
                        nameEng
                        projectType
                    }
                        houseNumber
                    unitNumber
                    owner
                    channel {
                        id
                        name
                    }
                    phoneOwner
                    status
                    checkInDate
                    checkInDate
                    checkInRangeTime{
                        id
                        name
                        label
                    }
                    createdAt
                    details{
                        id
                        detailNumber
                        category{
                        id
                        category
                        }
                        subcategory {
                        id
                        category
                        subCategory
                        }
                        description
                        status
                        isRate
                        isDateWork
                        isDateFinish
                        homecareName {
                            id
                            employeeId
                            firstnameThai
                            firstnameEng
                            lastnameThai
                            lastnameEng
                            email
                            lineId
                            workPhone
                        }
                    }
                }
            }
        `;
        getHomecareAllCase(ALLCASE, token, cb)
    })
}

export const getHomecareAllCase = async (ALLCASE, token, cb) => {
    const result = await API.request(ALLCASE, token);
    cb(result)
}

export default {
    homecareAllCase,
}
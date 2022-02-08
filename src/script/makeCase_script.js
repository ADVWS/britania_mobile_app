import moment from 'moment';
import API from '../graphQL'
import Store from '../store';

export const homecareCreateCase = async (key, detailTemp,data, unitOwnerId, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        console.log(data.checkInDate)
        const CASE = `
        mutation{
            homecareCreateCase(
                input: {
                        unitOwnerId: "${data.unitOwnerId}"
                        owner: "${data.owner}"
                        phoneOwner: "${data.phoneOwner}"
                        checkInDate: "${new Date(data.checkInDate)}"
                        checkInRangeTime: "${data.checkInRangeTime}"
                        details: [
                            ${detailTemp}
                        ]
                }
            ) {
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
                    }
                    subcategory {
                    id
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
        }`;
        console.log('MY BODY', CASE)
        
        setHomecareCreateCase(CASE, token, unitOwnerId, cb)
    })
}

const setHomecareCreateCase = async (CASE, token, unitOwnerId, cb) => {
    const result = await API.request(CASE, token);
    console.log('NEW CASE===>', result)
    if(result.homecareCreateCase && result.homecareCreateCase !== null){
        homecareAllCase(unitOwnerId, token, cb)
    }
    //cb(result.homecareGetCheckInRangeTimeOptions)
}

export const homecareAllCase = async (unitOwnerId, token, cb) => {
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
                        }
                        subcategory {
                        id
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
        const result = await API.request(ALLCASE, token);
        cb(result)
}
export default {
    homecareCreateCase
}
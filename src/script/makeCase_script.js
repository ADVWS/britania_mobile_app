import moment from 'moment';
import API from '../graphQL'
import Store from '../store';
import {gql} from 'graphql-request'

export const homecareCreateCase = async (key, detailTemp, data, unitOwnerId, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const CASE = gql`
        mutation{
            homecareCreateCase(
                input: {
                    unitOwnerId: "${data.unitOwnerId}"
                    owner: "${data.owner}"
                    phoneOwner: "${data.phoneOwner}"
                    checkInDate: "${data.checkInDate}"
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
        setHomecareCreateCase(CASE, token, unitOwnerId, cb)
    })
}

const setHomecareCreateCase = async (CASE, token, unitOwnerId, cb) => {
    const result = await API.request(CASE, token);
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

export const homecareGetCalendarHoliday = async (stateDate, endDate, key, cb) => {
    Store.getLocalStorege(key, (res) => {
         const token = res.detail.token
         const HOLIDAY = `
                query {
                    homecareGetCalendarHoliday(startDate: "${stateDate}", endDate: "${endDate}"){
                        id,
                        date,
                        title
                    }
                }
            `;
        checkHoliday(HOLIDAY, token, cb)
    })
}

const checkHoliday = async (HOLIDAY, token, cb) => {
    const result = await API.request(HOLIDAY, token);
    cb(result)
}


export default {
    homecareCreateCase,
    homecareGetCalendarHoliday
}
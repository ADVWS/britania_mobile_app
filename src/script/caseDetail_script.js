import API from '../graphQL'
import Store from "../store"

export const homecareGetCaseById = async (caseid, key, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const CASE = `
            query {
                homecareGetCaseById(id: "${caseid}") {
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
                        files {
                            id
                            mainId
                            detailId
                            fileId
                            fileCurName
                            filePrevName
                            fileExtension
                            status
                            homecareImageSrc
                        }
                    }
                }
            }
        `;
        getHomecareGetCaseById(CASE, token, cb)
    })
}

export const getHomecareGetCaseById = async (CASE, token, cb) => {
    const result = await API.request(CASE, token);
    console.log(result)
    cb(result)
}

export default {
    homecareGetCaseById,
}
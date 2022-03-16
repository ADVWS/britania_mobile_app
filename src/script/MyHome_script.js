import API from '../graphQL'
import Store from "../store"

export const homecareAllCase = async (unitOwnerId, key, typeInform, cb) => {
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
        getHomecareAllCase(ALLCASE, token, typeInform, cb)
    })
}

export const getHomecareAllCase = async (ALLCASE, token, typeInform, cb) => {
    const result = await API.request(ALLCASE, token);
    homecareGetCategory(token, result, typeInform, cb)
    //cb(result)
}

export const homecareGetCategory = async (token, allcase, typeInform, cb) => {
    const Category = `
        query {
            homecareGetCategory {
                id
                seq
                nameThai
            }
        }`;
    const result = await API.request(Category, token);
    var typeset = []
    if(result.homecareGetCategory){
        result.homecareGetCategory.map((item)=>{
            typeInform.map((map)=>{
                if(item.seq === map.seq){
                    item.image = map.image
                    typeset.push(item)
                }
            })
        })
    }
    var response = {
        case: allcase,
        caseType: result
    }
    cb(response)
}

export default {
    homecareAllCase,
}
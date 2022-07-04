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
              checkInRangeTime {
                id
                name
                label
              }
              createdAt
              details {
                id
                detailNumber
                category {
                  id
                  nameThai
                  seq
                }
                subcategory {
                  id
                  nameThai
                  seq
                  categoryId
                }
                description
                status
                isRate
                isDateWork
                isDateFinish
                homecareName {
                  homecareEmployeeImageSrc
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
                  status
                  homecareImageSrc
                }
                detailLog {
                  id
                  mainId
                  detailId
                  status
                  date
                  remark
                  files {
                    id
                    mainId
                    detailId
                       status
                    homecareImageSrc
                  }
                }
              }
            }
          }
        `;
        console.log(token)
        console.log(CASE)
        getHomecareGetCaseById(CASE, token, cb)
    })
}

export const getHomecareGetCaseById = async (CASE, token, cb) => {
    const result = await API.request(CASE, token);
    cb(result)
}

export default {
    homecareGetCaseById,
}
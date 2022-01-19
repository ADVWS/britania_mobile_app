import API from '../graphQL'
import Store from "../store"
export const checkToken = async (key, cb) => {
    Store.getLocalStorege(key, (res) => {
        console.log(res)
        if (res.result) {
            var token = res.detail.token
            var project = `{
                me {
                    id
                    name
                    email
                    mobileNo
                    units {
                        id
                        projectName
                        unitNumber
                        houseNumber
                    }
                }
            }`;
            getUser(project, token, cb)
        } else {
            var response = {
                detail: 'token is null .',
                goto: 'Login'
            }
            cb(response)
        }
    })
}

const getUser = async (project, token, cb) => {
    const result = await API.request(project, token);
    console.log('RESULT===>', result)
    if(typeof result === 'object'){
        var response = {
            detail: "Verify token success .",
            data: result,
            goto: 'TabFooter'
        }
        cb(response)
    } else {
        var response = {
            detail: 'token timeout .',
            goto: 'Login'
        }
        cb(response)
    }   
}

export default {
    checkToken
}
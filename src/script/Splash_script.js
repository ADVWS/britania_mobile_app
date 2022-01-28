import jwtDecode from 'jwt-decode'
import moment from 'moment'
import API from '../graphQL'
import Store from "../store"
export const checkToken = async (key, cb) => {
    Store.getLocalStorege(key, (res) => {
        console.log('TOKEN:::', res)
        if (res.result) {
            if(res.detail.type){
                console.log('Non Member')
                var response = {
                    detail: 'Non Member',
                    goto: 'TabFooter'
                }
                cb(response)
                return
            }
            var decode = jwtDecode(res.detail.token)
            if(moment().unix() < decode.exp){
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
                    detail: 'token is expire .',
                    goto: 'Login'
                }
                cb(response)
            }
        } else {
            if(res.detail.type){
                console.log('Non Member')
                var response = {
                    detail: 'Non Member',
                    goto: 'TabFooter'
                }
                cb(response)
            } else {
                var response = {
                    detail: 'token is null .',
                    goto: 'Login'
                }
                cb(response)
            }
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
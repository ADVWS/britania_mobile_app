import API from '../graphQL'
import Store from "../store"

export const userUpdateProfile = async (updatedata, image, key, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        console.log('POST GRAPHQL::::', image)
        if(image === ''){
            var UPDATE = `mutation {
                userUpdateProfile(
                    mobileNo: "${updatedata.mobileNo}", 
                    name: "${updatedata.name}"
                ) {
                    name
                    mobileNo
                    email
                    profileImage
                }
            }`;
        } else {
            var UPDATE = `mutation {
                userUpdateProfile(
                    mobileNo: "${updatedata.mobileNo}", 
                    name: "${updatedata.name}"
                    inputUserImage: {
                        fileId: "${image.fileId}"
                        fileCurName: "${image.fileCurName}"
                        filePrevName: "${image.filePrevName}"
                        fileExtension: "${image.fileExtension}"
                    }
                ) {
                    name
                    mobileNo
                    email
                    profileImage
                }
            }`;
        }
        updateUser(UPDATE, token, cb)
    })
}

export const updateUser = async(UPDATE, token, cb) => {
    const result = await API.request(UPDATE, token);
    cb(result)
}

export default {
    userUpdateProfile,
}
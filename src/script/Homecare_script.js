import API from '../graphQL'
import Store from '../store';

export const homecareGetCategory = async (key, typeInform, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const Category = `
            query {
                homecareGetCategory {
                    id
                    seq
                    nameThai
                }
            }`;
        getHomecareGetCategory(Category, token, typeInform, cb)
    })
}

const getHomecareGetCategory = async (Category, token, typeInform, cb) => {
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
    cb(typeset)
}


export default {
    homecareGetCategory,
}
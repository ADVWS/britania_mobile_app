import API from '../graphQL'
import Store from '../store';

export const homecareAllCsatQuestion = async (key, cb) => {
    Store.getLocalStorege(key, (res) => {
        const token = res.detail.token
        const QUES = `
            query {
                homecareAllCsatQuestion{
                    id
                    seq
                    wordThai
                    wordEng
                    wordOther
                    maxScore
                    defaultScore
                }
            }`;
            getHomecareAllCsatQuestion(QUES, token, cb)
    })
}

const getHomecareAllCsatQuestion = async (QUES, token, cb) => {
    const result = await API.request(QUES, token);
    cb(result.homecareAllCsatQuestion)
}

export default {
    homecareAllCsatQuestion
}
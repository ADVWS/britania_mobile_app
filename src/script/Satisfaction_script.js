import API from "../graphQL";
import Store from "../store";

export const homecareAllCsatQuestion = async (key, cb) => {
  Store.getLocalStorege(key, (res) => {
    const token = res.detail.token;
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
    getHomecareAllCsatQuestion(QUES, token, cb);
  });
};

const getHomecareAllCsatQuestion = async (QUES, token, cb) => {
  const result = await API.request(QUES, token);
  cb(result.homecareAllCsatQuestion);
};

export const homecareCreateCsat = async (key, mainId, detailId, rate, comment, cb) => {
  Store.getLocalStorege(key, (res) => {
    const token = res.detail.token;
    const VOTE = `
        mutation {
            homecareCreateCsat(
              input: {
                mainId: "${mainId}",
                detailId: "${detailId}",
                q1: ${rate.vote1},
                q2: ${rate.vote2},
                q3: ${rate.vote3},
                q4: ${rate.vote4},
                remark:"${comment}"
              }
            ){
              id
              detailNumber
              category {
                id
                nameThai
                seq
              }
              description
              status
              isRate
              isDateWork
              isDateFinish
            }
          }`;
    posthomecareCreateCsat(VOTE, token, cb);
  });
};

const posthomecareCreateCsat = async (VOTE, token, cb) => {
  const result = await API.request(VOTE, token);
  cb(result.homecareCreateCsat);
};

export default {
  homecareAllCsatQuestion,
  homecareCreateCsat,
};

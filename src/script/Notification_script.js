import API from "../graphQL";

export const notification = async (cb) => {
  const LOGIN = `
    query {
        announcementAll {
            id,
            title,
            description,
            type
        }
    }`;
  const result = await API.request(LOGIN);
  var respone;
  if (typeof result === "object") {
    respone = {
      notification: result.announcementAll,
    };
  } else {
    respone = {
      notification: [],
    };
  }
  cb(response);
};

export default {
  notification,
};

import API from "../graphQL";

export const notification = async (cb) => {
  const LOGIN = `
    query {
        notificationAll {
            id,
            title,
            description,
            type,
        }
    }`;
  const result = await API.request(LOGIN);
  var response;
  if (typeof result === "object") {
    response = {
      notification: result.announcementAll,
    };
  } else {
    response = {
      notification: [],
    };
  }
  cb(response);
};

export default {
  notification,
};

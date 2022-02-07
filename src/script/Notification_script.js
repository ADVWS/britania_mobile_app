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

export const notificationCountUnread = async (token, cb) => {
  const COUNTER = `
    query {
      notificationCountUnread
    }`;
  const result = await API.request(COUNTER, token);
  cb(result.notificationCountUnread)
}

export default {
  notification,
  notificationCountUnread
};

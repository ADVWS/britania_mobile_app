import API from "../graphQL";
import store from "../store";

export const notification = async (token, cb) => {
  const LOGIN = `
    query {
        notificationAll {
            id,
            title,
            description,
            type,
            notificationDate,
            readDate
        }
    }`;
  const result = await API.request(LOGIN, token);
  var response;
  if (typeof result === "object") {
    response = {
      notification: result.notificationAll,
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
  cb(result.notificationCountUnread);
};

export const notificationRead = async (id, key, cb) => {
  store.getLocalStorege(key, async (res) => {
    const token = res.detail.token;
    var UPDATE = `
    mutation
    {
      notificationReadMessage(
        notificationId: "${id}"
      )
      {
        id
        title
        description
        type
        notificationDate
        readDate
      }
    }
  `;

    const result = await API.request(UPDATE, token);

    cb(result);
  });
};

export default {
  notification,
  notificationCountUnread,
  notificationRead,
};

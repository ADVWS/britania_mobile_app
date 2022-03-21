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
  // console.log("API RESULT==>");
  // console.log("notification", result);
  // console.log(typeof result);
  // console.log("RESULTKEEP ==> " + resultKeep.notificationAll);
  // console.log(typeof result === "object");

  if (typeof result === "object") {
    response = {
      notification: result.notificationAll,
    };
  } else {
    response = {
      notification: [],
    };
  }
  // console.log("Notification Again");
  // console.log(result.announcementAll);
  console.log("Response ==>");
  console.log(response);
  cb(response);
};

export const notificationCountUnread = async (token, cb) => {
  const COUNTER = `
    query {
      notificationCountUnread
    }`;
  const result = await API.request(COUNTER, token);
  console.log("notificationCountUnread", result);
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

import API from "../graphQL";

export const userUpdateTokenNotification = async (data, cb) => {
  const NOTIFY = `
    mutation {
        userUpdateTokenNotification(
          pushToken: "${data.NOTIFYTOKEN}",
          id: "${data.id}"
        ){
          id
          name
          email
          mobileNo
          status
          nationType
          idcard
          passport
          allowMenuHomecare
          profileImage
        }
      }
    `;
  try {
    const result = await API.request(NOTIFY, data.token);
    console.log("NOTIFY:::", result);
    cb(result);
  } catch (error) {
    cb("error");
  }
};

export default {
  userUpdateTokenNotification,
};

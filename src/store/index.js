import { AsyncStorage } from "react-native";

const setLocalStorege = async (key, data, cb) => {
  try {
    await AsyncStorage.setItem(
      key, data
    );
    var res = {
      result: true,
      detail: "Success, Storege Profile."
    }
    cb(res)
  } catch (error) {
    var res = {
      result: false,
      detail: "Error, Storege fail."
    }
    cb(res)
  }
};

const getLocalStorege = async (key, cb) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      try {
        var res = {
          result: true,
          detail: JSON.parse(value)
        }
        cb(res)
      } catch (e) {
        var res = {
          result: true,
          detail: value
        }
        cb(res)
      }
    } else {
      var res = {
        result: false,
        detail: `Error, get ${key} is null.`
      }
      cb(res)
    }
  } catch (error) {
    var res = {
      result: false,
      detail: `Error, get ${key} is null.`
    }
    cb(res)
  }
};

const removeLocalStorege = async (key, cb) => {
  try {
    const value = await AsyncStorage.removeItem(key);
    var res = {
      result: true,
      detail: 'Logout success .'
    }
    cb(res)
  } catch (error) {
    var res = {
      result: false,
      detail: `Cann't Logout .`
    }
    cb(res)
  }
}

export default {
  setLocalStorege,
  getLocalStorege,
  removeLocalStorege
}
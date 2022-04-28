import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode'
import moment from "moment";
import Script from "../script";

const setLocalStorege = async (key, data, cb) => {
  try {
    await AsyncStorage.setItem(
      key, data
    );
    var res = {
      result: true,
      detail: "Storege Success ."
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
      if(key === "@Token:key"){
        checkToken(key, value, cb)
      } else{
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
      }
    } else {
      var res = {
        result: false,
        detail: `Error, get ${key} is null.1`
      }
      cb(res)
    }
  } catch (error) {
    var res = {
      result: false,
      detail: `Error, get ${key} is null.2`
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

function checkToken(key, token, cb) {
  var mytoken = JSON.parse(token)
  var decode = jwtDecode(mytoken.token)
  if(moment().unix() > decode.exp){
    Script.refreshToken(token.refreshToken, (res)=>{
      if(typeof res === 'object'){
        mytoken.token = res.token.token
        mytoken.refreshToken = res.token.refreshToken
        saveNewToken(key, mytoken, cb)
      }
    })
  } else {
    var callback = {
      result: true,
      detail: mytoken
    }
    cb(callback)
  }
 }

const saveNewToken = async (key, token, cb) => {
  var value = JSON.stringify(token)
    await AsyncStorage.setItem(key, value);
    if(typeof token === 'object'){
      var res = {
        result: true,
        detail: token
      }
    } else {
      var res = {
        result: true,
        detail: JSON.parse(token)
      }
    }
    cb(res)
}

export default {
  setLocalStorege,
  getLocalStorege,
  removeLocalStorege
}
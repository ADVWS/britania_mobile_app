import AsyncStorage from '@react-native-async-storage/async-storage';
import Key from '../KEYS.json'

const USERLOGOUT = (cb) => {
    logoutProfile(cb)
}

const logoutProfile = async (cb) => {
    try {
      const value = await AsyncStorage.removeItem(Key.PROFILE);
      var res = {
        result: true,
        detail: 'Logout success .'
      }
      logoutToken(cb)
    } catch (error) {
      var res = {
        result: false,
        detail: `Cann't Logout .`
      }
      logoutToken(cb)
    }
}

const logoutToken = async (cb) => {
    try {
      const value = await AsyncStorage.removeItem(Key.TOKEN);
      var res = {
        result: true,
        detail: 'Logout success .'
      }
      cb(res)
    } catch (error) {
      console.log(error)
      var res = {
        result: false,
        detail: `Cann't Logout .`
      }
      cb(res)
    }
}

export default {
    USERLOGOUT
}
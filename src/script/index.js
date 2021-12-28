import { initialRouteName } from "../globalState"
import { useRecoilState, atom, useRecoilValue } from "recoil";

export function getGlobalState(key, cb) {
    console.log('test')
}

export default {
    getGlobalState
}
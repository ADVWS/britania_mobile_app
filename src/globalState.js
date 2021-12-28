const { atom } = require("recoil")

export const initialRouteName = atom({
    key: 'initialRouteName',
    default: 'Home'
})

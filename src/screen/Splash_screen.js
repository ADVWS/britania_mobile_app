import * as React from "react";
import { View, Image } from "react-native";

import * as navigate from '../navigator/RootNavigation';

import { Styles } from "../styles";
import Script from "../script/Splash_script"
import Key from "../KEYS.json"
import { useSetRecoilState } from "recoil";
import * as Global from "../globalState"
import LANG from "../LANG";
import Store from "../store";
import TokenNotification from "../script/TokenNotification";

export default function Splash() {
  const userProfile = useSetRecoilState(Global.userProfile)
  const userType = useSetRecoilState(Global.userType)
  const setLANG = useSetRecoilState(Global.Language)
  const setLANGTEXT = useSetRecoilState(Global.LANGTEXT)
  const ownerType = useSetRecoilState(Global.ownerType)

  React.useEffect(()=>{
    runApp()
  },[])

  function runApp() {
    console.log('Run App')
    Script.checkToken(Key.TOKEN, (res) => {
      if (res.data) {
        console.log(res)
        if(res.data.me){
          userProfile(res.data)
          userType(1)
          if(res.data.me.unitsOwner){
            if(res.data.me.unitsOwner === null){
              ownerType('none')
            } else {
              if(res.data.me.unitsOwner.length > 0){
                ownerType('owner')
              } else {
                ownerType('none')
              }
            }
          }
          var dataNotify = {
            id: res.data.me.id,
            token: res.token
          }
          setNotify(dataNotify, res.goto)
        } else {
          userProfile(res.data)
          userType(2)
          setLanguage(res.goto)
        }
      } else {
        setLanguage(res.goto)
      }
    })
  }

  function setNotify(dataNotify, goto) {
    Store.getLocalStorege(Key.NOTIFY, (NOTIFYTOKEN)=>{
      dataNotify.NOTIFYTOKEN = NOTIFYTOKEN
      TokenNotification.userUpdateTokenNotification(dataNotify,(res)=>{
        if(res.userUpdateTokenNotification){
          setLanguage(goto)
        } else {
          setLanguage(goto)
        }
      })
    })
  }

  function setLanguage(goto) {
    Store.getLocalStorege(Key.LANG, (data)=>{
      if(data.result){
        setLANGTEXT(data.detail)
        var myLANG = LANG.settingLanguage(data.detail)
        setLANG(myLANG)
        setTimeout(() => {
          navigate.navigate(goto)
        }, 3000);
      } else {
        setLangStart(goto)
      }
    })
  }

  function setLangStart(goto){
    setLANGTEXT('TH')
    var myLANG = LANG.settingLanguage('TH')
    setLANG(myLANG)
    setTimeout(() => {
      navigate.navigate(goto)
    }, 3000);
  }

  return (
    <View style={[Styles.flex]}>
      <View
        style={[Styles.al_center, Styles.jc_center, Styles.h100, Styles.w100, Styles.mainColor2]}>
          <Image source={require('../../assets/image/britania_new_theme/BRITANIA_CONNECT_LOGO-03.png')} style={[{width: 350, height: 350}]}/>
      </View>
    </View>
  );
}

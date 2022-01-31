import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Styles } from "../../styles";
import * as Global from '../../globalState'
import { useRecoilState } from "recoil";

const Modal_changeLang = ({selectLang}) => {

  const [LANG, setLANG] = useRecoilState(Global.Language)

  const isSelectLang = (LN) => {
    selectLang(LN);
  }

  return (
    <View
      style={[
        Styles.w100,
        Styles.al_center,
        Styles.jc_center,
        Styles.p15,
        Styles.FFF,
        Styles.br_5,
      ]}
    >
      <View style={[Styles.w100]}>
        <Text style={[Styles.f_24, Styles.mainFont, Styles.mainColor_text]}>
          {LANG.login_text_08}
        </Text>
      </View>
      <View style={[Styles.w100, Styles.mt20]}>
        <TouchableOpacity
          onPress={() => isSelectLang('TH')}
          style={[
            Styles.w100,
            Styles.p20,
            Styles.boxWithShadow,
            Styles.FFF,
            Styles.br_5,
          ]}
        >
          <Text style={[Styles.f_22, Styles.mainFont_x]}>{LANG.login_text_09}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => isSelectLang('EN')}
          style={[
            Styles.w100,
            Styles.p20,
            Styles.boxWithShadow,
            Styles.FFF,
            Styles.br_5,
            Styles.mt10,
          ]}
        >
          <Text style={[Styles.f_22, Styles.mainFont_x]}>English</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Modal_changeLang
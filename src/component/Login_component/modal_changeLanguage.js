import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Styles } from "../../styles";

export default class Modal_changeLang extends React.Component {

  isSelectLang = (LANG) => {
    const {selectLang} = this.props;
    this.selectLang = selectLang;
    this.props.selectLang(LANG);
  }

  render() {
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
            เลือกภาษา
          </Text>
        </View>
        <View style={[Styles.w100, Styles.mt20]}>
          <TouchableOpacity
            onPress={()=>this.isSelectLang('TH')}
            style={[
              Styles.w100,
              Styles.p20,
              Styles.boxWithShadow,
              Styles.FFF,
              Styles.br_5,
            ]}
          >
            <Text style={[Styles.f_22, Styles.mainFont_thin]}>ภาษาไทย</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>this.isSelectLang('EN')}
            style={[
              Styles.w100,
              Styles.p20,
              Styles.boxWithShadow,
              Styles.FFF,
              Styles.br_5,
              Styles.mt10,
            ]}
          >
            <Text style={[Styles.f_22, Styles.mainFont_thin]}>English</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import * as navigate from "../../navigator/RootNavigation";
import Modal from "react-native-modal";
import { Styles } from "../../styles";
import Modal_confirm from "../modal_confirm";
import Store from "../../store";
import Key from "../../KEYS.json";
import { useRecoilState } from "recoil";
import * as Global from "../../globalState";

const NavBtn = ({ option }) => {
  const [confirm, setConfirm] = React.useState(false);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const logout = (req) => {
    if (req === "CANCEL") {
      setConfirm(false);
    } else {
      Store.removeLocalStorege(Key.PROFILE, (res) => {
        Store.removeLocalStorege(Key.TOKEN, (_res) => {
          setConfirm(false);
          navigate.navigate('Login')
        });
      });
    }
  };
  return (
    <View style={[Styles.boxWithShadow2, Styles.mt20]}>
      {option.map((item) =>
        item.nav !== "callcen" ? (
          <TouchableOpacity
            onPress={() => navigate.navigate(item.nav)}
            style={[
              Styles.boxWithShadow,
              Styles.w100,
              Styles.p12,
              Styles.FFF,
              Styles.br_5,
              Styles.mt10,
              Styles.row,
            ]}
          >
            <View style={[Styles.w90]}>
              <Text
                style={[
                  Styles.f_20,
                  Styles.mainFont,
                  Styles.mt10,
                  Styles.text_left,
                  Styles.black_gray_text,
                  { bottom: 3 },
                ]}
              >
                {item.name}
              </Text>
            </View>
            <View style={[Styles.jc_center, Styles.al_end]}>
              <MaterialIcons name="arrow-forward-ios" size={15} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${"021613000"}`)}
            style={[
              Styles.boxWithShadow,
              Styles.w100,
              Styles.p12,
              Styles.FFF,
              Styles.br_5,
              Styles.mt10,
              Styles.row,
            ]}
          >
            <View style={[Styles.w90]}>
              <Text
                style={[
                  Styles.f_20,
                  Styles.mainFont,
                  Styles.mt10,
                  Styles.text_left,
                  Styles.black_gray_text,
                  { bottom: 3 },
                ]}
              >
                {item.name}
              </Text>
            </View>
            <View style={[Styles.jc_center, Styles.al_end]}>
              <MaterialIcons name="arrow-forward-ios" size={15} />
            </View>
          </TouchableOpacity>
        )
      )}
      <TouchableOpacity
        onPress={() => setConfirm(true)}
        style={[
          Styles.boxWithShadow,
          Styles.w100,
          Styles.p12,
          Styles.FFF,
          Styles.br_5,
          Styles.mt10,
          Styles.row,
        ]}
      >
        <View style={[Styles.w90]}>
          <Text
            style={[
              Styles.f_20,
              Styles.mainFont,
              Styles.mt10,
              Styles.text_left,
              Styles.black_gray_text,
              { bottom: 3 },
            ]}
          >
            {LANG.account_text_07}
          </Text>
        </View>
        <View style={[Styles.jc_center, Styles.al_end]}>
          <MaterialIcons name="arrow-forward-ios" size={15} />
        </View>
      </TouchableOpacity>
      <Modal
        isVisible={confirm}
        style={Styles.al_center}
        backdropOpacity={0.25}
      >
        <Modal_confirm text={LANG.account_text_11} confirmFunction={logout} />
      </Modal>
    </View>
  );
};

export default NavBtn;

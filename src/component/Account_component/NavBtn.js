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
import { Restart } from "fiction-expo-restart";
import { Styles } from "../../styles";
import Modal_confirm from "../modal_confirm";
import Store from "../../store";
import Key from "../../KEYS.json";

const NavBtn = ({ option }) => {
  const [confirm, setConfirm] = React.useState(false);

  const logout = (req) => {
    if (req === "CANCEL") {
      setConfirm(false);
    } else {
      Store.removeLocalStorege(Key.PROFILE, (res) => {
        Store.removeLocalStorege(Key.TOKEN, (_res) => {
          setConfirm(false);
          Restart();
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
              Styles.p15,
              Styles.FFF,
              Styles.br_5,
              Styles.mt10,
              Styles.row,
            ]}
          >
            <View style={[Styles.w90]}>
              <Text
                style={[
                  Styles.f_24,
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
              <MaterialIcons name="arrow-forward-ios" size={20} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${"021613000"}`)}
            style={[
              Styles.boxWithShadow,
              Styles.w100,
              Styles.p15,
              Styles.FFF,
              Styles.br_5,
              Styles.mt10,
              Styles.row,
            ]}
          >
            <View style={[Styles.w90]}>
              <Text
                style={[
                  Styles.f_22,
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
              <MaterialIcons name="arrow-forward-ios" size={20} />
            </View>
          </TouchableOpacity>
        )
      )}
      <TouchableOpacity
        onPress={() => setConfirm(true)}
        style={[
          Styles.boxWithShadow,
          Styles.w100,
          Styles.p15,
          Styles.FFF,
          Styles.br_5,
          Styles.mt10,
          Styles.row,
        ]}
      >
        <View style={[Styles.w90]}>
          <Text
            style={[
              Styles.f_22,
              Styles.mainFont,
              Styles.mt10,
              Styles.text_left,
              Styles.black_gray_text,
              { bottom: 3 },
            ]}
          >
            ออกจากระบบ
          </Text>
        </View>
        <View style={[Styles.jc_center, Styles.al_end]}>
          <MaterialIcons name="arrow-forward-ios" size={20} />
        </View>
      </TouchableOpacity>
      <Modal
        isVisible={confirm}
        style={Styles.al_center}
        backdropOpacity={0.25}
      >
        <Modal_confirm text={"ยืนยันการออกจากระบบ"} confirmFunction={logout} />
      </Modal>
    </View>
  );
};

export default NavBtn;

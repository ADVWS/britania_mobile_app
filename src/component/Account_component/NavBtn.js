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
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Global from "../../globalState";

const NavBtn = ({ optiono }) => {
  const [confirm, setConfirm] = React.useState(false);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [userType, setUserType] = useRecoilState(Global.userType);
  const [userProfile, setUserProfile_] = useRecoilState(Global.userProfile);
  const [ownerType, setownerType] = useRecoilState(Global.ownerType)
  console.log("NavBtn User Profile");
  console.log(userProfile);
  const logout = (req) => {
    if (req === "CANCEL") {
      setConfirm(false);
    } else {
      Store.removeLocalStorege(Key.PROFILE, (res) => {
        Store.removeLocalStorege(Key.TOKEN, (_res) => {
          setConfirm(false);
          navigate.navigate("Login");
        });
      });
    }
  };
  return (
    <View style={[Styles.boxWithShadow2, Styles.mt20]}>
        <>
          <TouchableOpacity
            onPress={() => navigate.navigate("Profile")}
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
                {LANG.account_text_02}
              </Text>
            </View>
            <View style={[Styles.jc_center, Styles.al_end]}>
              <MaterialIcons name="arrow-forward-ios" size={15} />
            </View>
          </TouchableOpacity>
          {ownerType === "owner" && (
            <TouchableOpacity
              onPress={() => navigate.navigate("MemberManage")}
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
                  {LANG.account_text_03}
                </Text>
              </View>
              <View style={[Styles.jc_center, Styles.al_end]}>
                <MaterialIcons name="arrow-forward-ios" size={15} />
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => navigate.navigate("Language")}
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
                {LANG.account_text_04}
              </Text>
            </View>
            <View style={[Styles.jc_center, Styles.al_end]}>
              <MaterialIcons name="arrow-forward-ios" size={15} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate.navigate("TermOfService")}
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
                {LANG.account_text_05}
              </Text>
            </View>
            <View style={[Styles.jc_center, Styles.al_end]}>
              <MaterialIcons name="arrow-forward-ios" size={15} />
            </View>
          </TouchableOpacity>

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
                {LANG.account_text_06}
              </Text>
            </View>
            <View style={[Styles.jc_center, Styles.al_end]}>
              <MaterialIcons name="arrow-forward-ios" size={15} />
            </View>
          </TouchableOpacity>

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
              {marginBottom: '30%'}
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
        </>
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

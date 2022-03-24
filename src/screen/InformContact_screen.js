import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import Modal from "react-native-modal";

import * as Global from "../globalState";
import { Feather } from "@expo/vector-icons";
import { Styles } from "../styles";
import Key from "../KEYS.json";
import MainHeader from "../component/mainHeader";
import InformOrderList from "../component/InformContact_component/informOrderList";
import mainScript from "../script";
import Holiday from "../script/makeCase_script";
import getTime from "../script/getTimeCheckin_script";
import Modal_alert from "../component/modal_alert";
import Modal_loading from "../component/modal_loading";
import moment from "moment";

const InformContact = ({ route }) => {
  const _setNewInform = useSetRecoilState(Global.newInform);
  const timecheck = useSetRecoilState(Global.checkInTime);
  const setCaseLists = useSetRecoilState(Global.caseList);
  const holiday = useSetRecoilState(Global.holiday);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [newInform, setListNewInform] = useRecoilState(Global.newInform);
  const [unitOwner, setUnitOwner_] = useRecoilState(Global.unitOwner);
  const [caseList, setCaseList] = useRecoilState(Global.caseList);
  
  const [alAddress, setAladdress] = React.useState(false);
  const [alAddressColor, setAladdressColor] = React.useState("#DDD");
  const [fullname, setFullname] = React.useState("");
  const [alFullname, setAlfullname] = React.useState(false);
  const [alFullnameColor, setAlfullnameColor] = React.useState("#DDD");
  const [mobileno, setMobileno] = React.useState("");
  const [alMobileno, setAlmobileno] = React.useState(false);
  const [alMobilenoColor, setAlmobilenoColor] = React.useState("#DDD");
  const [textAlert, setTextAlert] = React.useState("");
  const [alert, setAlert] = React.useState(false);
  const [load, setLoad] = React.useState(false);

  console.log(newInform);

  React.useEffect(() => {
    setFullname(newInform.owner);
    setMobileno(newInform.phoneOwner);
  }, []);

  function Addmore(req) {
    navigate.navigate("SelectTypeInform");
  }

  function gotoinformCalendar() {
    console.log("hi");
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 10000);
    setAlfullname(false);
    setAlfullnameColor("#DDD");
    setAlmobileno(false);
    setAlmobilenoColor("#DDD");
    var checker = [];
    if (fullname === "") {
      checker.push(false);
      setAlfullname(true);
      setAlfullnameColor("red");
    }
    if (mobileno === "") {
      checker.push(false);
      setAlmobileno(true);
      setAlmobilenoColor("red");
    }
    if (checker.indexOf(false) !== -1) {
      return;
    }
    var _newInform = mainScript.recoilTranform(newInform);
    _newInform.owner = fullname;
    _newInform.phoneOwner = mobileno;
    _newInform.details = caseList;
    getTime.homecareGetCheckInRangeTimeOptions(Key.TOKEN, (res) => {
      console.log("time", res);
      if (res.homecareGetCheckInRangeTimeOptions) {
        _setNewInform(_newInform);
        timecheck(res.homecareGetCheckInRangeTimeOptions);
        checkHoliday()
      } else {
        setLoad(false)
        setTimeout(() => {
          setTextAlert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
          setAlert(true)
        }, 1000);
      }
    });
  }

  function checkHoliday() {
    var startdate = moment().format("YYYY-01-01")
    var enddate = moment().add(1, 'Y').format("YYYY-12-31")
    var holidaySet = []
    console.log(startdate, enddate)
    Holiday.homecareGetCalendarHoliday(startdate, enddate, Key.TOKEN, (res)=>{
      setLoad(false)
      if(res.homecareGetCalendarHoliday){
        res.homecareGetCalendarHoliday.map((item)=>{
          holidaySet.push(moment(item.date))
        })
        holiday(holidaySet)
        console.log('Holiday:::', holidaySet)
        navigate.navigate("InformCalendar");
      } else {
        setLoad(false)
        setTimeout(() => {
          setTextAlert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
          setAlert(true)
        }, 1000);
      }
    })
}

  function deleteItem(item) {
    var newItem = mainScript.recoilTranform(caseList);
    newItem = newItem.filter((data) => data.description != item);
    setCaseLists(newItem);
    if (newItem.length <= 0) {
      navigate.navigate("SelectTypeInform");
    }
  }
  
  const closeModalAlert = () => setAlert(false)


  return (
    <View style={[Styles.flex, Styles.al_center, Styles.mainColorF9]}>
      <View style={[Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader
          name={LANG.informcontact_text_01}
          backto={"InformAdd"}
          param={route.params}
        />
        <ScrollView style={[Styles.w100, Styles.flex]}>
          <View style={[Styles.w100, Styles.p15, Styles.mainColorF9]}>
            <Text style={[Styles.f_22, Styles.mainFont]}>
              {LANG.informcontact_text_02}
            </Text>
            <TextInput
              value={unitOwner.houseNumber}
              editable={false}
              style={[
                Styles.w100,
                Styles.p10,
                Styles.br_5,
                Styles.mt10,
                {
                  borderColor: alAddressColor,
                  borderWidth: 1.5,
                  backgroundColor: "#ebebeb",
                },
              ]}
              // onChangeText={(val) => {
              //     setAddress(val)
              // }}
            />
            {alAddress && (
              <Text
                style={[
                  Styles.f_20,
                  Styles.mainFont,
                  Styles.mt5,
                  { color: "red" },
                ]}
              >
                กรุณาระบุ "ห้องที่ต้องการแจ้งซ่อม"
              </Text>
            )}
            <Text style={[Styles.f_22, Styles.mainFont, Styles.mt15]}>
              {LANG.informcontact_text_03}
            </Text>
            <TextInput
              value={fullname}
              style={[
                Styles.w100,
                Styles.p10,
                Styles.br_5,
                Styles.mt10,
                Styles.mainColor_FFFF,
                { borderColor: alFullnameColor, borderWidth: 1.5 },
              ]}
              onChangeText={(val) => {
                setFullname(val);
              }}
            />
            {alFullname && (
              <Text
                style={[
                  Styles.f_20,
                  Styles.mainFont,
                  Styles.mt5,
                  { color: "red" },
                ]}
              >
                กรุณาระบุ "ชื่อ-นามสกุล"
              </Text>
            )}
            <Text style={[Styles.f_22, Styles.mainFont, Styles.mt15]}>
              {LANG.informcontact_text_04}
            </Text>
            <TextInput
              value={mobileno}
              style={[
                Styles.w100,
                Styles.p10,
                Styles.br_5,
                Styles.mt10,
                Styles.mb10,
                Styles.mainColor_FFFF,
                { borderColor: alMobilenoColor, borderWidth: 1.5 },
              ]}
              keyboardType={"number-pad"}
              maxLength={10}
              onChangeText={(val) => {
                setMobileno(val);
              }}
            />
            {alMobileno && (
              <Text
                style={[
                  Styles.f_20,
                  Styles.mainFont,
                  Styles.mt5,
                  { color: "red" },
                ]}
              >
                กรุณาระบุ "เบอร์โทรศัพท์"
              </Text>
            )}
          </View>
          <View
            style={[Styles.w100, Styles.p15, Styles.mainColorF9, Styles.mt10]}
          >
            <Text style={[Styles.f_24, Styles.mainFont, Styles.mainColor_text]}>
              {LANG.informcontact_text_05}
            </Text>
            {caseList.map((item) => (
              <InformOrderList item={item} deleteItem={deleteItem} />
            ))}
            <TouchableOpacity
              onPress={() => Addmore()}
              style={[
                Styles.w100,
                Styles.p15,
                Styles.br_5,
                Styles.mt10,
                Styles.mb20,
                Styles.row,
                { borderColor: "#bb6a70", borderWidth: 1.5 },
              ]}
            >
              <View style={[Styles.w40, Styles.al_end]}>
                <Feather name="plus" size={24} color="#bb6a70" />
              </View>
              <Text
                style={[Styles.f_22, Styles.mainColor_text, Styles.mainFont]}
              >
                {" "}
                {LANG.informcontact_text_10}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => gotoinformCalendar()}
              style={[
                Styles.w100,
                Styles.p15,
                Styles.br_5,
                Styles.mt10,
                Styles.mb20,
                Styles.row,
                Styles.mainColor_bb6,
              ]}
            >
              <View style={[Styles.w50, Styles.al_end]}>
                <Text style={[Styles.f_22, Styles.white_text, Styles.mainFont]}>
                  {LANG.informcontact_text_11}
                </Text>
              </View>
              <View style={[Styles.w45, Styles.al_start]}>
                <Feather name="arrow-right" size={24} color="#FFF" />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Modal isVisible={alert} style={Styles.al_center}>
        <Modal_alert textAlert={textAlert} closeModalAlert={closeModalAlert} />
      </Modal>
      <Modal isVisible={load} style={Styles.al_center}>
        <Modal_loading />
      </Modal>
    </View>
  );
};

export default InformContact;

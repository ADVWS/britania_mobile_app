import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import CalendarPicker from "react-native-calendar-picker";

import * as Global from "../globalState";

import { Styles } from "../styles";
import mainScript from "../script";
import Script from "../script/makeCase_script";
import Key from "../KEYS.json";

import MainHeader from "../component/mainHeader";
import moment from "moment";
import Modal_confirm_2 from "../component/modal_confirm_2";
import Modal_alert from "../component/modal_alert";

const InformCalendar = ({ route }) => {
  const informStatus = [
    "Pending",
    "Checking",
    "Assign",
    "Reject",
    "ReInprocess",
    "Hold-Customer",
    "Unapproved",
  ];
  const historyStatus = ["Finish", "Close"];
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [LANGTEXT, setLANGTEXT] = useRecoilState(Global.LANGTEXT);

  const [minDate, setMindate] = React.useState(moment().startOf("day"));

  const [selectDate, setSelectDate] = React.useState(moment());
  const [confirmBox, setConfirmBox] = React.useState(false);
  const [unitOwner, setUnitOwner_] = useRecoilState(Global.unitOwner);

  const [time, setTime] = useRecoilState(Global.checkInTime);
  const [newInform, setNewInform] = useRecoilState(Global.newInform);

  const [alert, setAlert] = React.useState(false);
  const [texAlert, setTextAlert] = React.useState("");

  const [defaultTime, setDefaultTime] = React.useState({
    name: time[0].name,
    value: time[0].value,
  });

  const setListInform = useSetRecoilState(Global.dataListInform);
  const setlistHistory = useSetRecoilState(Global.dataListHistory);

  const addMyHome = useSetRecoilState(Global.dataMyHome);
  const addMyProject = useSetRecoilState(Global.dataMyproject);

  const informSet = newInform;

  const closeModalAlert = () => setAlert(false);

  React.useEffect(() => {
    if (route.params) {
      setDefaultTime(route.params.InformTime);
    }
  }, []);
  function settimeInform() {
    console.log("set ", route.params);
    if (route.params) {
      if(route.params.defaultTime){
        return route.params.defaultTime.name;
      } else {
        return route.params.name;
      }
    } else {
      return defaultTime.name;
    }
  }

  function onDateChange(date) {
    setSelectDate(date);
  }

  function checkHoliday() {
      var startdate = moment().format("YYYY-01-01")
      var enddate = moment().add(1, 'Y').format("YYYY-12-31")
      console.log(startdate, enddate)
      Script.homecareGetCalendarHoliday(startdate, enddate, Key.TOKEN, (res)=>{
        if(res.homecareGetCalendarHoliday){
            var holiday = res.homecareGetCalendarHoliday
            var checker = ''
            holiday.map((item)=>{
                if(moment(item.date).format('YYYY-MM-DD') === moment(selectDate).format('YYYY-MM-DD')){
                    console.log('this holiday')
                    checker = item.title
                }
            })
            if(checker !== ''){
                setAlert(true)
                setTextAlert(LANGTEXT === 'TH' ? `งดให้บริการเนื่องจาก ${checker}` : LANG.informcalendar_text_07)
                return
            } else {
                console.log('PASS')
                confirmData()
            }
        } else {
            confirmData()
        }
      })
  }

  function confirmData() {
    if (route.params) {
      var selectTime = route.params.value;
    } else {
      var selectTime = defaultTime.value;
    }
    if (selectDate !== "") {
      var inform = [];
      var history = [];
      var dataset = mainScript.recoilTranform(informSet);
      dataset = mainScript.recoilTranform(newInform);
      dataset.unitOwnerId = unitOwner.id;
      dataset.checkInRangeTime = String(selectTime);
      dataset.checkInDate = moment(selectDate).format("YYYY-MM-DD HH:mm:ss");
      var detailTemp = "";
      dataset.details.map((item) => {
        detailTemp += `{
                        categoryId: "${item.categoryId}"
                        description: "${item.description}"
                    `;
        if (item.file.length <= 0) {
          detailTemp += "files: []";
        } else {
          detailTemp += `files: [`;
          for (let i = 0; i < item.file.length; i++) {
            detailTemp += `{
                            fileId: "${item.file[i].fileId}"
                            fileCurName: "${item.file[i].fileCurName}"
                            filePrevName: "${item.file[i].filePrevName}"
                            fileExtension: "${item.file[i].fileExtension}"
                        }`;
          }
          detailTemp += "]";
        }
      });
      detailTemp += "}";
      dataset.details = JSON.stringify(dataset.details);
      Script.homecareCreateCase(
        Key.TOKEN,
        detailTemp,
        dataset,
        unitOwner.id,
        (res) => {
          if (res.homecareAllCase && res.homecareAllCase !== null) {
            res.homecareAllCase.map((item) => {
              if (informStatus.indexOf(item.status) !== -1) {
                if (item.details.length > 0) {
                  inform.push(item);
                }
              } else if (historyStatus.indexOf(item.status) !== -1) {
                if (item.details.length > 0) {
                  history.push(item);
                }
              }
            });
            setListInform(inform);
            setlistHistory(history);
            setConfirmBox(true);
            //navigate.navigate('Homecare')
          }
        }
      );
    }
  }

  function confirm() {
    navigate.navigate("Homecare");
  }

  return (
    <>
      {!confirmBox && (
        <View style={[Styles.flex, Styles.al_center, Styles.mainColorF9]}>
          <View style={[Styles.al_center, Styles.w100, Styles.h100]}>
            <MainHeader
              name={LANG.informcalendar_text_01}
              backto={"InformContact"}
              informSet={informSet}
            />
            <ScrollView style={[Styles.w100, Styles.flex, Styles.mainColorF9]}>
              <View style={[Styles.w100, Styles.p15]}>
                <Text style={[Styles.f_24, Styles.mainFont, Styles.mt5]}>
                  {LANG.informcalendar_text_02}
                </Text>
              </View>
              <View
                style={[
                  Styles.w100,
                  Styles.p10,
                  { backgroundColor: "#ffecec" },
                ]}
              >
                <CalendarPicker
                  minDate={minDate}
                  previousTitle={
                    <MaterialIcons name="arrow-back-ios" size={18} />
                  }
                  nextTitle={
                    <MaterialIcons name="arrow-forward-ios" size={18} />
                  }
                  weekdays={["S", "M", "T", "W", "T", "F", "S"]}
                  todayBackgroundColor="#bb6a70"
                  todayTextStyle={{ color: "#000" }}
                  selectedDayStyle={{ backgroundColor: "#bb6a70" }}
                  selectedDayTextColor="#FFF"
                  textStyle={[Styles.mainFont_x, Styles.f_20]}
                  yearTitleStyle={[Styles.mainFont, Styles.f_22]}
                  monthTitleStyle={[Styles.mainFont, Styles.f_22]}
                  disabledDatesTextStyle={[Styles.f_26]}
                  onDateChange={(val) => onDateChange(val)}
                />
              </View>
              <View style={[Styles.w100, Styles.p15]}>
                <Text style={[Styles.f_24, Styles.mainFont, Styles.mt10]}>
                  {LANG.informcalendar_text_03}
                </Text>
                <Text
                  style={[
                    Styles.f_24,
                    Styles.mainFont,
                    Styles.mt5,
                    { color: "#8f8f8f" },
                  ]}
                >
                  {settimeInform()}
                </Text>
                <TouchableOpacity
                  onPress={() => navigate.navigate("InformTime")}
                  style={[
                    Styles.w100,
                    Styles.p10,
                    Styles.br_5,
                    Styles.mt10,
                    Styles.mb5,
                    { borderColor: "#bb6a70", borderWidth: 1.5 },
                  ]}
                >
                  <Text
                    style={[
                      Styles.f_24,
                      Styles.mainColor_text,
                      Styles.mainFont,
                      Styles.text_center,
                    ]}
                  >
                    {LANG.informcalendar_text_03}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => checkHoliday()}
                  style={[
                    Styles.w100,
                    Styles.p15,
                    Styles.br_5,
                    Styles.mt10,
                    Styles.mt100,
                    Styles.mainColor_bb6,
                  ]}
                >
                  <Text
                    style={[
                      Styles.f_24,
                      Styles.white_text,
                      Styles.mainFont,
                      Styles.text_center,
                    ]}
                  >
                    {LANG.informcalendar_text_04}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      )}
      <Modal
        isVisible={confirmBox}
        style={Styles.al_center}
        backdropOpacity={0.5}
      >
        <Modal_confirm_2
          text={
            LANG.informcalendar_text_05
          }
          confirmFunction={confirm}
        />
      </Modal>
      <Modal isVisible={alert} style={Styles.al_center}>
        <Modal_alert textAlert={texAlert} closeModalAlert={closeModalAlert} />
      </Modal>
    </>
  );
};

export default InformCalendar;

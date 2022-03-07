import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import mainScript from "../script";
import Key from "../KEYS.json";
import * as Global from "../globalState";
import Store from "../store";
import Modal_loading from "../component/modal_loading";
import { Styles } from "../styles";
import Modal from "react-native-modal";
import MainHeader from "../component/mainHeader";

const InformAdd = ({ route }) => {
  console.log(route.params);
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [gallery, setGallery] = React.useState([]);
  const [caseList, setCaseList] = useRecoilState(Global.caseList);
  const _setCaseList = useSetRecoilState(Global.caseList);

  const gobalData = useSetRecoilState(Global.informSet);
  const [isCase, setIsCase] = React.useState(route.params);
  const [imageAdd, setImageAdd] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
  const [detail, setDetail] = React.useState("");

  const [alDetail, setAlDetail] = React.useState(false);
  const [alBoxDetail, setAlBoxDetail] = React.useState("#DDD");
  const [alImage, setAlImage] = React.useState(false);

  const [load, setLoad] = React.useState(false);

  var indexPic = 0;
  var storeImage = [];

  console.log(caseList);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    var imageset = imageAdd;
    setDisplay(false);
    imageset.push(result.uri);
    setImageAdd(imageset);
    var galleryArray = gallery;
    galleryArray.push(result.uri);
    if (imageAdd.length > 0) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
    // console.log(result);
    // var formdata = new FormData();
    // var Type = result.uri.substring(result.uri.lastIndexOf(".") + 1)
    // var Data = {
    //     uri: result.uri,
    //     name: `upload_image`,
    //     type: `image/${Type}`
    // };
    // formdata.append('file', Data)
    // formdata.append('target', 'profile')
    // Store.getLocalStorege(Key.TOKEN, (tk) => {
    //     const token = tk.detail.token
    //     mainScript.uploadImage(token, formdata, (res) => {
    //         var galleryArray = gallery
    //         galleryArray.push(res)
    //         console.log('galleryArray:::', galleryArray)
    //         setDisplay(false)
    //         if (!result.cancelled) {
    //             imageset.push(result.uri)
    //             setImageAdd(imageset);
    //             if (imageAdd.length > 0) {
    //                 setDisplay(true)
    //             } else {
    //                 setDisplay(false)
    //             }
    //         }
    //     })
    // })
  };

  function gotoInformContact() {
    setAlDetail(false);
    setAlImage(false);
    setLoad(true)
    setAlBoxDetail("#DDD");
    var checker = [];
    if (detail === "") {
      checker.push(false);
      setAlDetail(true);
      setAlBoxDetail("red");
    }
    if (checker.indexOf(false) !== -1) {
      return;
    }
    setIsCase(mainScript.recoilTranform(isCase));
    isCase.description = detail;
    storeImage = [];
    TranformImage(gallery, (img) => {
      if (gallery.length === 0) {
        isCase.file = [];
      } else {
        isCase.file = img;
      }
      storeImage = [];
      var newCase = [isCase];
      if (caseList.length > 0) {
        var setNewcase = mainScript.recoilTranform(caseList);
        setNewcase.push(isCase);
        _setCaseList(setNewcase);
      } else {
        _setCaseList(newCase);
      }
      setLoad(false)
      navigate.navigate("InformContact", isCase);
    });
  }

  function TranformImage(pic, cb) {
    if(gallery.length === 0) {
        cb([])
        return
    }
    var formdata = new FormData();
    var Type = pic[indexPic].substring(pic[indexPic].lastIndexOf(".") + 1);
    var Data = {
      uri: pic[indexPic],
      name: `upload_image`,
      type: `image/${Type}`,
    };
    formdata.append("file", Data);
    formdata.append("target", "profile");
    Store.getLocalStorege(Key.TOKEN, (tk) => {
      const token = tk.detail.token;
      mainScript.uploadImage(token, formdata, (res) => {
        console.log(indexPic, res);
        if (indexPic + 1 > pic.length) {
          indexPic = 0;
          cb(storeImage);
        } else {
          storeImage.push(res);
          indexPic++;
          TranformImage(pic, cb);
        }
      });
    });
  }

  return (
    <View style={[Styles.flex, Styles.al_center, Styles.mainColorF9]}>
      <View style={[Styles.al_center, Styles.w100, Styles.h100]}>
        <MainHeader name={LANG.informadd_text_01} backto={"SelectTypeInform"} />
        <KeyboardAvoidingView
          style={[Styles.w100, Styles.h100]}
          behavior="padding"
        >
          <ScrollView style={[Styles.w100, Styles.mainColorF9, Styles.flex]}>
            <View style={[Styles.w100, Styles.p15]}>
              <Text
                style={[Styles.f_24, Styles.mainFont, Styles.mainColor_text]}
              >
                {LANG.informadd_text_02}
              </Text>
              <Text style={[Styles.f_24, Styles.mainFont, Styles.mt20]}>
                {LANG.informadd_text_03}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  pickImage();
                }}
                style={[
                  Styles.w100,
                  Styles.br_5,
                  Styles.p10,
                  Styles.mt5,
                  Styles.row,
                  Styles.jc_center,
                  { borderColor: "#bb6a70", borderWidth: 1.5 },
                ]}
              >
                <Image
                  source={require("../../assets/image/add_image.png")}
                  style={{ width: 30, height: 30, tintColor: "#bb6a70" }}
                />
                <Text
                  style={[
                    Styles.f_22,
                    Styles.mainFont,
                    Styles.mainColor_text,
                    Styles.text_center,
                    Styles.p4,
                  ]}
                >
                  {LANG.informadd_text_04}
                </Text>
              </TouchableOpacity>
              {display && (
                <ScrollView
                  style={[Styles.w100, Styles.mt20]}
                  horizontal={true}
                >
                  {imageAdd.map((item) => (
                    <Image
                      source={{ uri: item }}
                      style={[
                        Styles.br_5,
                        { width: 120, height: 120, marginRight: 10 },
                      ]}
                    />
                  ))}
                </ScrollView>
              )}
              {/* {alImage &&
                                <Text style={[Styles.f_20, Styles.mainFont, Styles.mt5, { color: 'red' }]}>
                                    กรุณาระบุ "รูปภาพ"
                                </Text>
                            } */}
              <Text style={[Styles.f_24, Styles.mainFont, Styles.mt20]}>
                {LANG.informadd_text_05}
              </Text>
              <TextInput
                value={detail}
                style={[
                  Styles.w100,
                  Styles.mainColor_FFFF,
                  Styles.p15,
                  Styles.br_5,
                  Styles.mt10,
                  { borderColor: alBoxDetail, borderWidth: 1.5, height: 130 },
                ]}
                multiline={true}
                numberOfLines={6}
                onChangeText={(val) => {
                  setDetail(val);
                }}
              />
              {alDetail && (
                <Text
                  style={[
                    Styles.f_20,
                    Styles.mainFont,
                    Styles.mt5,
                    { color: "red" },
                  ]}
                >
                  {LANG.informadd_text_07}
                </Text>
              )}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <TouchableOpacity
          onPress={() => gotoInformContact()}
          style={[
            Styles.w90,
            Styles.p15,
            Styles.br_5,
            Styles.mt20,
            Styles.mb20,
            Styles.mainColor_bb6,
            Styles.absolute,
            { bottom: 20 },
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
            {LANG.informadd_text_06}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={load} style={Styles.al_center}>
        <Modal_loading />
      </Modal>
    </View>
  );
};

export default InformAdd;

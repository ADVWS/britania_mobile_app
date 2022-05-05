import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import * as navigate from "../navigator/RootNavigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as ImagePicker from "expo-image-picker";
import mainScript from "../script";
import Key from "../KEYS.json";
import * as Global from "../globalState";
import Store from "../store";
import Modal_loading from "../component/modal_loading";
import { Styles } from "../styles";
import Modal from "react-native-modal";
import MainHeader from "../component/mainHeader";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";

const InformAdd = ({ route }) => {
  const [LANG, setLANG] = useRecoilState(Global.Language);
  const [caseList, setCaseList] = useRecoilState(Global.caseList);
  const _setCaseList = useSetRecoilState(Global.caseList);
  const [iscaseEdit, setiscaseEdit] = useRecoilState(Global.caseEdit);

  const [gallery, setGallery] = React.useState([]);
  const [isCase, setIsCase] = React.useState(iscaseEdit.id!==""?iscaseEdit:route.params);
  const [imageAdd, setImageAdd] = React.useState(iscaseEdit.imgSet.length > 0?iscaseEdit.imgSet:[]);
  const [display, setDisplay] = React.useState(iscaseEdit.imgSet.length > 0?true:false);
  const [detail, setDetail] = React.useState(iscaseEdit.description!==""?iscaseEdit.description:"");
  const [alDetail, setAlDetail] = React.useState(false);
  const [alBoxDetail, setAlBoxDetail] = React.useState("#DDD");
  const [load, setLoad] = React.useState(false);
  const inputRef = React.createRef();
  

  var indexPic = 0;
  var storeImage = [];


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 7],
      quality: 1,
    });
    console.log(result)
    if (!result.cancelled) {
      var imageset = mainScript.recoilTranform(imageAdd);
      setDisplay(false);
      var imageId = mainScript.makeid(6);
      imageset.push({ img: result.uri, id: imageId });
      setImageAdd(imageset);
      if (imageAdd.length >= 0) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    }
  };

  function gotoInformContact() {
    setAlDetail(false);
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 4000);
    setAlBoxDetail("#DDD");
    var checker = [];
    if (detail === "") {
      checker.push(false);
      setAlDetail(true);
      setAlBoxDetail("red");
    }
    if (checker.indexOf(false) !== -1) {
      setLoad(false);
      return;
    }
    setIsCase(mainScript.recoilTranform(isCase));
    var selectImage = [];
    if (imageAdd.length > 0) {
      imageAdd.map((img) => {
        selectImage.push(img.img);
      });
    }
    if (iscaseEdit.id !== "") {
      var isEdit = mainScript.recoilTranform(iscaseEdit)
      setIsCase(isEdit)
      var editcase = []
      var editCaseList = mainScript.recoilTranform(caseList)
      editCaseList.map((item)=>{
        if(item.id === iscaseEdit.id){
          item.description = detail
          item.imgUri = selectImage
          item.imgSet = imageAdd
          editcase.push(item)
        } else {
          editcase.push(item)
        }
      })
      _setCaseList(editcase)
      setLoad(false);
      navigate.navigate("InformContact", isCase);
    } else {
      isCase.description = detail;
      isCase.id = mainScript.makeid(6);
      isCase.imgUri = selectImage;
      isCase.file = [];
      isCase.imgSet = imageAdd
      storeImage = [];
      indexPic = 0;
      //navigate.navigate("InformContact", isCase);
      var newCase = [isCase];

      if (caseList.length > 0) {
        var setNewcase = mainScript.recoilTranform(caseList);
        setNewcase.push(isCase);
        _setCaseList(setNewcase);
      } else {
        _setCaseList(newCase);
      }
      setLoad(false);
      navigate.navigate("InformContact", isCase);
    }
  }

  function deleteImage(id) {
    var remove = imageAdd.filter(function (img) {
      return img.id != id;
    });
    //setGallery(remove)
    setImageAdd(remove);
    if (imageAdd.length === 0) {
      setDisplay(false);
    }
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
                    <ImageBackground
                      source={{ uri: item.img }}
                      imageStyle={Styles.br_5}
                      style={[
                        {
                          width: 120,
                          height: 120,
                          marginRight: 10,
                          alignItems: "flex-end",
                          padding: 5,
                        },
                      ]}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          deleteImage(item.id);
                        }}
                        style={[
                          Styles.FFF,
                          Styles.al_center,
                          Styles.jc_center,
                          Styles.circle,
                          Styles.mainColor_bb6,
                          { width: 25, height: 25 },
                        ]}
                      >
                        <FontAwesome name="close" size={22} color="#FFF" />
                      </TouchableOpacity>
                    </ImageBackground>
                  ))}
                </ScrollView>
              )}
              <Text style={[Styles.f_24, Styles.mainFont, Styles.mt20]}>
                {LANG.informadd_text_05}
              </Text>
              <TextInput
                value={detail}
                ref={inputRef}
                style={[
                  Styles.w100,
                  Styles.mainColor_FFFF,
                  Styles.p15,
                  Styles.br_5,
                  Styles.mt10,
                  {
                    borderColor: alBoxDetail,
                    borderWidth: 1.5,
                    height: 130,
                    textAlignVertical: "top",
                  },
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

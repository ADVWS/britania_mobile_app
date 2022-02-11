import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Styles } from "../../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import mainScript from '../../script'
import * as Global from "../../globalState";
import Store from "../../store";
import Key from "../../KEYS.json"

export default class ProfilePicCom extends React.Component {
  state = {
    image: this.props.picture,
  };

  _InputImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      var formdata = new FormData();
      var Type = result.uri.substring(result.uri.lastIndexOf(".") + 1)
      var Data={
        uri: result.uri,
        name: `upload_image`,
        type: `image/${Type}` 
       };      
      formdata.append('file', Data)
      formdata.append('target', 'profile')
      Store.getLocalStorege(Key.TOKEN, (tk)=>{
        const token = tk.detail.token
        mainScript.uploadImage(token, formdata,(res)=>{
          console.log('Upload image', res)
          this.setState({
            image: { uri: result.uri },
          });
          const {uploadImage} = this.props;
          this.uploadImage = uploadImage;
          this.uploadImage(res);
        })
      })
    }
  };

  render() {
    return (
      <View style={[Styles.al_center]}>
        <View style={[Styles.mt10]}>
          <ImageBackground
            source={this.state.image}
            imageStyle={Styles.circle}
            style={[{ width: 150, height: 150, resizeMode: "cover" }]}
          >
            <View>
              <Image
                style={[
                  {
                    width: 35,
                    height: 35,
                    resizeMode: "cover",
                    backgroundColor: "#ffdfdf",
                    position: "absolute",
                    top: 106,
                    left: 106,
                  },
                  Styles.circle,
<<<<<<< HEAD
                  { borderWidth: 1, borderColor: "#bb6a70" },
=======
             
>>>>>>> 1fda7e619d39ec1b574f25ccf34f09f24a9540e0
                ]}
              />
              <TouchableOpacity onPress={() => this._InputImage()}>
                <MaterialCommunityIcons
                  name="image-plus"
                  size={21}
                  color="#bb6a70"
                  style={{ position: "absolute", top: 112.5, left: 112.5 }}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

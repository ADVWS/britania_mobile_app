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
import mainScript from "../../script";
import * as Global from "../../globalState";
import Store from "../../store";
import Key from "../../KEYS.json";

export default class ProfilePictureComnocrop extends React.Component {
  state = {
    image: this.props.picture,
  };

  _InputImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      this.setState({
        image: { uri: result.uri },
      });
      const { uploadImage } = this.props;
      this.uploadImage = uploadImage;
      this.uploadImage(result.uri);
    }
  };

  render() {
    return (
      <View style={[Styles.al_center]}>
        <TouchableOpacity
          onPress={() => this._InputImage()}
          style={[Styles.mt10]}
        >
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
        </TouchableOpacity>
      </View>
    );
  }
}

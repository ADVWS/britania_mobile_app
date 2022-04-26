import * as React from "react";
import {Image} from "react-native";

import { Styles } from "../styles";

export default class FooterSignin extends React.Component {
  render() {
    return (
      <>
        <Image
          source={require("../../assets/image/bottom-bg2.png")}
          style={[
            Styles.w55,
            Styles.h35,
            Styles.absolute,
            Styles.bottomMin20,
            Styles.opacity01,
          ]}
        />z
      </>
    );
  }
}

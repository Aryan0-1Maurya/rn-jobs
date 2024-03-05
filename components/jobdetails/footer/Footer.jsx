import React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";

import { icons } from "../../../constants";
import styles from "./footer.style";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL(url)}
        style={styles.applyBtn}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

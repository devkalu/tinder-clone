import React from "react";
import { View } from "react-native";

import CustomButton from "../CustomButton";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "../../utility";

const SelectionButtons = ({ handleSelection }) => {
  return (
    <View style={styles.buttonContainer}>
      <CustomButton
        Icon={FontAwesome}
        iconName="times"
        IconColor={colors.dislike}
        iconsize={40}
        onPress={() => handleSelection(-1)}
      />

      <CustomButton
        Icon={FontAwesome}
        iconName="heart"
        IconColor={colors.like}
        iconsize={40}
        onPress={() => handleSelection(1)}
      />
    </View>
  );
};

export default SelectionButtons;

import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

const Selection = ({ type }) => {
  const selectionColor = type === "like" ? "#00eda6" : "#ff006f";
  return (
    <View style={[styles.container, { borderColor: selectionColor }]}>
      <Text style={[styles.text, { color: selectionColor }]}>{type}</Text>
    </View>
  );
};

export default Selection;

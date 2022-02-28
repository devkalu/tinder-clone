import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { Context } from "../../hooks/Context/AuthContext";

import { styles } from "./styles";

const ChatScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default ChatScreen;

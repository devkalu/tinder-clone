import { useNavigation, useContext } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";
import { Context } from "../../hooks/Context/AuthContext";

import { styles } from "./styles";

const AuthenticationScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome back </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default AuthenticationScreen;

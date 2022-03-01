import { useNavigation } from "@react-navigation/native";

import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { Context } from "../../hooks/Context/AuthContext";

import { styles } from "./styles";

const AuthenticationScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  return (
    <View>
      <Text>Welcome back {state[0].name}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default AuthenticationScreen;

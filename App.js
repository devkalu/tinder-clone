import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./src/Navigator/StackNavigator";

import { Provider } from "./src/hooks/Context/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <StackNavigator />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

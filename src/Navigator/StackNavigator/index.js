import "react-native-gesture-handler";
import React, { useContext } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SwipeScreen from "../../screen/SwipeScreen";
import ChatScreen from "../../screen/ChatScreen";
import AuthenticationScreen from "../../screen/AuthenticationScreen";
import { Context } from "../../hooks/Context/AuthContext";

const Stack = createStackNavigator();

function StackNavigator() {
  const { state } = useContext(Context);
  return (
    <Stack.Navigator>
      {state[0].isSignedIn ? (
        <>
          <Stack.Screen name="Home" component={SwipeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </>
      ) : (
        <Stack.Screen name="Authentication" component={AuthenticationScreen} />
      )}
    </Stack.Navigator>
  );
}

export default StackNavigator;

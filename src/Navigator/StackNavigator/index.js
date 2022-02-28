import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";

import SwipeScreen from "../../screen/SwipeScreen";
import ChatScreen from "../../screen/ChatScreen";
import AuthenticationScreen from "../../screen/AuthenticationScreen";

const Stack = createStackNavigator();

function StackNavigator() {
  const isSignnedIn = true;
  return (
    <Stack.Navigator>
      {isSignnedIn ? (
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

import React, { useCallback, useRef } from "react";
import { TouchableWithoutFeedback, View, Animated } from "react-native";

import { styles } from "./styles";

const CustomButton = ({ Icon, iconName, iconsize, IconColor, onPress }) => {
  const scaleFactor = useRef(new Animated.Value(1)).current;
  const animateScaleFactor = useCallback(
    (value) => {
      Animated.spring(scaleFactor, {
        toValue: value,
        friction: 4,
        useNativeDriver: true,
      }).start();
    },
    [scaleFactor]
  );
  return (
    <TouchableWithoutFeedback
      onPressIn={() => animateScaleFactor(0.8)}
      delayPressIn={0}
      onPressOut={() => {
        animateScaleFactor(1);
        onPress();
      }}
      delayPressOut={100}
    >
      <Animated.View
        style={[styles.container, { transform: [{ scale: scaleFactor }] }]}
      >
        <Icon name={iconName} size={iconsize} color={IconColor} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;

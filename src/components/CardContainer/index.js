import React, { useCallback } from "react";
import { View, Text, ImageBackground, Animated, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import Selection from "../Selection";
import { SWIPE_THRESHOLD } from "../../utility";

const CardContainer = ({
  item,
  isVisible,
  swipeAnimation,
  tiltSelectionTitle,
  ...rest
}) => {
  const likeOpacity = swipeAnimation.x.interpolate({
    inputRange: [30, SWIPE_THRESHOLD],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const nopeOpacity = swipeAnimation.x.interpolate({
    inputRange: [-SWIPE_THRESHOLD, -30],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const rotateCard = Animated.multiply(
    swipeAnimation.x,
    tiltSelectionTitle
  ).interpolate({
    inputRange: [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD],
    outputRange: ["-8deg", "0deg", "8deg"],
  });
  const animate = {
    transform: [
      ...swipeAnimation.getTranslateTransform(),
      { rotate: rotateCard },
    ],
  };

  const renderSelection = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[styles.selection, styles.like, { opacity: likeOpacity }]}
        >
          <Selection type="like" />
        </Animated.View>
        <Animated.View
          style={[styles.selection, styles.nope, { opacity: nopeOpacity }]}
        >
          <Selection type="nope" />
        </Animated.View>
      </>
    );
  }, [likeOpacity, nopeOpacity]);

  return (
    <Animated.View style={[styles.container, isVisible && animate]} {...rest}>
      <Image source={{ uri: item.imageUri }} style={styles.image} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={styles.gradient}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.info}>{item.name} ,</Text>
        <Text style={styles.info}>{item.age}</Text>
      </View>
      <View style={styles.distanceContainer}>
        <Text style={styles.distance}>
          {item.distance} km from your location
        </Text>
      </View>
      {isVisible && renderSelection()}
    </Animated.View>
  );
};

export default CardContainer;

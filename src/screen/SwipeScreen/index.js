import React, { useState, useRef, useCallback, useEffect } from "react";
import { View, Animated, PanResponder, Button } from "react-native";

import { DATA } from "../../Data";
import CardContainer from "../../components/CardContainer";

import { styles } from "./styles";
import SelectionButtons from "../../components/SelectionButtons";
import { CARD_DIMENSIONS, SWIPE_THRESHOLD } from "../../utility";
import { useNavigation } from "@react-navigation/core";

const SwipeScreen = () => {
  const [data, setData] = useState(DATA);
  const swipeAnimation = useRef(new Animated.ValueXY()).current;
  const tiltSelectionTitle = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  useEffect(() => {
    if (!data.length) {
      setData(DATA);
    }
  }, [data.length]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      swipeAnimation.setValue({ x: gesture.dx, y: gesture.dy });
      tiltSelectionTitle.setValue(
        gesture.y0 > CARD_DIMENSIONS.height / 2 ? -1 : 1
      );
    },
    onPanResponderRelease: (event, gesture) => {
      const direction = Math.sign(gesture.dx);
      const isActionActive = Math.abs(gesture.dx) > SWIPE_THRESHOLD;
      if (isActionActive) {
        Animated.timing(swipeAnimation, {
          duration: 200,
          toValue: {
            x: direction * 500,
            y: gesture.dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.spring(swipeAnimation, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  //come back and fix this
  const removeTopCard = useCallback(() => {
    setData((prevData) => prevData.slice(1));
    swipeAnimation.setValue({ x: 0, y: 0 });
  }, [swipeAnimation]);

  const handleSelection = useCallback(
    (direction) => {
      Animated.timing(swipeAnimation.x, {
        toValue: direction * CARD_DIMENSIONS.width,
        duration: 200,
        useNativeDriver: true,
      }).start(removeTopCard);
    },
    [removeTopCard, swipeAnimation.x]
  );

  return (
    <View style={styles.container}>
      {data
        .map((item, index) => {
          const isVisible = index === 0;
          const dragHandlers = isVisible ? panResponder.panHandlers : {};

          return (
            <CardContainer
              item={item}
              isVisible={isVisible}
              key={item.id}
              {...dragHandlers}
              swipeAnimation={swipeAnimation}
              tiltSelectionTitle={tiltSelectionTitle}
            />
          );
        })
        .reverse()}

      <SelectionButtons handleSelection={handleSelection} />
    </View>
  );
};

export default SwipeScreen;

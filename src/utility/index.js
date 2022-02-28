import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const colors = {
  like: "#00eda6",
  dislike: "#ff006f",
};

export const SWIPE_THRESHOLD = width * 0.35;

export const CARD_DIMENSIONS = {
  width: width * 0.9,
  height: height * 0.7,
};

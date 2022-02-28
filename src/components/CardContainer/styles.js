import { StyleSheet, Dimensions } from "react-native";
import { CARD_DIMENSIONS } from "../../utility";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 5,
    overflow: "hidden",
    borderRadius: 20,
  },

  info: {
    fontSize: 30,
    marginRight: 20,
    fontWeight: "700",
    color: "#fff",
  },
  image: {
    width: CARD_DIMENSIONS.width,
    height: CARD_DIMENSIONS.height,
  },

  infoContainer: {
    position: "absolute",

    flexDirection: "row",
    width: "40%",
    justifyContent: "space-between",
    bottom: 60,
    left: 10,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
    borderRadius: 20,
  },
  distanceContainer: {
    position: "absolute",
    bottom: 40,
    left: 10,
  },
  distance: {
    color: "#fff",
  },
  selection: {
    position: "absolute",
    top: 50,
  },
  like: {
    right: 50,
    transform: [{ rotate: "30deg" }],
  },
  nope: {
    left: 50,
    transform: [{ rotate: "-30deg" }],
  },
});

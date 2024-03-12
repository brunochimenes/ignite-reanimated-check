import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 192,

    borderRadius: theme.borderRadius.lg,

    overflow: "hidden",
  },
  image: {
    flex: 1,
  },
  linear: {
    flex: 1,
    justifyContent: "flex-end",

    padding: 12,
  },
  title: {
    color: theme.colors.white,

    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.body.sm,
  },
  minutes: {
    color: theme.colors.yellow_500,

    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.xs,
  },
});

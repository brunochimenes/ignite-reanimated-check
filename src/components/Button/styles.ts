import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: theme.colors.green_600,

    borderRadius: theme.borderRadius.sm,
  },
  text: {
    color: theme.colors.white,

    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.sm,
  },
});

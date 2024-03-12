import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    gap: 22,
  },
  step: {
    color: theme.colors.black,

    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.body.sm,
  },
  description: {
    flex: 1,

    color: theme.colors.gray_400,

    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
  },
});

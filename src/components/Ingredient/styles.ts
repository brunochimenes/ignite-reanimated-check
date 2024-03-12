import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 42,
    alignItems: "center",

    borderWidth: 2,
    borderColor: theme.colors.gray_200,
    borderRadius: theme.borderRadius.full,
    paddingHorizontal: 16,

    gap: 6,
  },
  image: {
    width: 16,
    height: 16,
  },
  title: {
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.sm,
  },
  selected: {
    backgroundColor: theme.colors.green_100,

    borderWidth: 2,
    borderColor: theme.colors.green_600,
  },
});

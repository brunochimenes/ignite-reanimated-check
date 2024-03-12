import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",

    backgroundColor: theme.colors.black,

    borderRadius: theme.borderRadius.lg,
    padding: 24,

    position: "absolute",
    bottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 34,
  },
  label: {
    color: theme.colors.white,

    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
  },
});

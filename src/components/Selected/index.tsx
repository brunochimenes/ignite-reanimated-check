import { Text, View } from "react-native";
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons/";

import { styles } from "./styles";

import { theme } from "@/theme";

import { Button } from "../Button";

type SelectedProps = {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
};

export function Selected({ onClear, onSearch, quantity }: SelectedProps) {
  return (
    <Animated.View
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>

        <MaterialIcons
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_200}
        />
      </View>

      <Button title="Encontrar" onPress={onSearch} />
    </Animated.View>
  );
}

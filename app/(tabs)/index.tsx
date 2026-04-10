import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "../../hooks/useTheme";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.content}>This is Home screen</Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Change theme</Text>
      </TouchableOpacity>

      <Text>Another text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  content: {
    fontSize: 16,
  },
});

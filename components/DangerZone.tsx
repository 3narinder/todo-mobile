import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const DangerZone = () => {
  const { colors } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  const clearTodos = useMutation(api.todos.clearAll);

  const handleClearApp = async () => {
    Alert.alert(
      "Reset App",
      "This will delete all your todos permanently. this Action cannot be undone",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete All",
          style: "destructive",
          onPress: async () => {
            try {
              const result = await clearTodos();
              Alert.alert(
                "App Reset",
                `Successfully deleted ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"}. your app has been Reset`,
              );
            } catch (error) {
              console.log("Error while clearing the todos", error);
              Alert.alert("Error", "Unable to delete all todos");
            }
          },
        },
      ],
    );
  };

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitleDanger}>Danger zone</Text>
      <TouchableOpacity
        style={[settingsStyles.actionButton, { borderBottomWidth: 0 }]}
        onPress={handleClearApp}
        activeOpacity={0.8}
      >
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.danger}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name="trash" size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyles.actionTextDanger}>Reset app</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DangerZone;

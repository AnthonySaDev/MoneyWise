import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/(auth)/welcome");
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={styles.logo}
        entering={FadeInUp.duration(2000)}
        resizeMode="contain"
        source={require("../assets/images/splashImage.png")}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
  logo: {
    height: "20%",
    aspectRatio: 1,
  },
});

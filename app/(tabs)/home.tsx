import Button from "@/components/Button";
import Typo from "@/components/Typo";
import { auth } from "@/config/firebase";
import { useAuth } from "@/contexts/authContext";
import { signOut } from "firebase/auth";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  const { user } = useAuth();
  const handleLogOut = async () => {
    await signOut(auth);
  };
  return (
    <View>
      <Text>{user?.name}</Text>
      <Button onPress={handleLogOut}>
        <Typo>Log out</Typo>
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

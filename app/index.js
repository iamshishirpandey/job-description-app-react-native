import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, images, icons, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: COLORS.lightWhite,
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconURL={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconURL={icons.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

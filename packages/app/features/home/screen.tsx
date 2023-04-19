import { SafeAreaView, Text, View } from "react-native";

import React from "react";

export function HomeScreen() {
  return (
    <SafeAreaView className="h-full flex-1 flex-col justify-center bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          HomeScreen
        </Text>
      </View>
    </SafeAreaView>
  );
}

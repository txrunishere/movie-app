import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

const TabIcon = ({
  focused,
  name,
  icon,
}: {
  focused: boolean;
  name: string;
  icon: ImageSourcePropType | undefined;
}) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row items-center justify-center w-full min-w-28 rounded-full overflow-hidden min-h-[55px] mt-3"
      >
        <Image source={icon} tintColor={"black"} className="size-5" />
        <Text className="text-base ml-2">{name}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className=" size-full justify-end items-center">
      <Image
        source={icon}
        tintColor={"white"}
        className="size-5 flex items-center justify-center"
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          marginBottom: 30,
          borderRadius: 50,
          height: 48,
          overflow: "hidden",
          position: "absolute",
          marginHorizontal: 6,
          borderColor: "#0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} name="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} name="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} name="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} name="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface SearchBarProps {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = ({ placeholder, onPress }: SearchBarProps) => {
  return (
    <View className="flex-row items-center px-5 gap-2 py-2 rounded-full bg-black/40">
      <Image source={icons.search} />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        className="px-4 flex-1 text-white rounded-full"
        placeholderTextColor={"gray"}
      />
    </View>
  );
};

export default SearchBar;

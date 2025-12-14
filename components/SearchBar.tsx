import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface SearchBarProps {
  onPress?: () => void;
  placeholder: string;
  search?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({
  placeholder,
  onPress,
  onChangeText,
  search,
}: SearchBarProps) => {
  return (
    <View className="flex-row items-center px-5 gap-2 py-2 rounded-full bg-black/40">
      <Image source={icons.search} />
      <TextInput
        onPress={onPress}
        value={search}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="px-4 flex-1 text-white rounded-full"
        placeholderTextColor={"gray"}
      />
    </View>
  );
};

export default SearchBar;

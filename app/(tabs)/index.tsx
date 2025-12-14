import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0f0F10]">
      <Image source={images.bg} className="z-0 absolute w-full" />

      <ScrollView
        className="flex-1 px-5 "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 100,
        }}
      >
        <Image source={icons.logo} className="w-16 h-12 mb-10 mt-20 mx-auto" />

        <View>
          <SearchBar
            placeholder="Search for a movie"
            onPress={() => router.push("/(tabs)/search")}
          />
        </View>
      </ScrollView>
    </View>
  );
}

import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          className="w-full rounded-lg h-52"
          resizeMode="cover"
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
        />
        <Text className="text-white text-sm font-bold mt-1" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center gap-1">
          <Image className="size-4" source={icons.star} />
          <Text className="text-white text-xs">
            {Math.floor(vote_average!)}
          </Text>
        </View>
        <Text className="text-white text-xs mt-0.5">
          {release_date?.split("-")[0]}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

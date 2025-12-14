import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useFetch } from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    isLoading: isMoviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-[#0f0D10]">
      <Image source={images.bg} className="z-0 absolute w-full" />

      <ScrollView
        className="flex-1 px-5 "
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Image source={icons.logo} className="w-16 h-12 mb-10 mt-20 mx-auto" />

        {isMoviesLoading ? (
          <ActivityIndicator />
        ) : moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : (
          <View>
            <SearchBar
              placeholder="Search for a movie"
              onPress={() => router.push("/(tabs)/search")}
            />

            <>
              <Text className="text-white mt-6 font-bold text-lg mb-3">
                Latest Movies
              </Text>

              <FlatList
                data={movies}
                renderItem={({ item }) => (
                  <MovieCard
                    id={item.id}
                    poster_path={item.poster_path}
                    title={item.title}
                    vote_average={item.vote_average}
                    release_date={item.release_date}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                scrollEnabled={false}
                columnWrapperStyle={{
                  gap: 20,
                  paddingRight: 5,
                  justifyContent: "flex-start",
                  marginBottom: 10,
                }}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

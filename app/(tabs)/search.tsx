import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useFetch } from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const {
    data: movies,
    isLoading: isMoviesLoading,
    error: moviesError,
    refetch,
    reset,
  } = useFetch(() => fetchMovies({ query: search }), false);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (search.trim()) {
        await refetch();
      } else reset();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search]);

  return (
    <View className="flex-1 bg-[#0f0D10]">
      <Image source={images.bg} className="w-full flex-1 absolute z-0" />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 10,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        className="px-5"
        ListHeaderComponent={
          <>
            <View className="mt-20 mb-5">
              <Image className="mx-auto" source={icons.logo} />
            </View>
            <View className="my-5">
              <SearchBar
                placeholder="Search Movies..."
                search={search}
                onChangeText={(text: string) => setSearch(text)}
              />
            </View>

            {isMoviesLoading && <ActivityIndicator className="my-3" />}
            {moviesError && (
              <Text className="text-red-500">
                Error: {moviesError?.message}
              </Text>
            )}

            {!isMoviesLoading &&
              !moviesError &&
              search.trim() &&
              movies?.length > 0 && (
                <Text className="text-white font-bold text-lg">
                  Search Results for{" "}
                  <Text className="text-purple-300">{search}</Text>
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
          !isMoviesLoading && !movies ? (
            <View>
              <Text className=" text-center mt-10 text-gray-500">
                No Movies Found!!
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;

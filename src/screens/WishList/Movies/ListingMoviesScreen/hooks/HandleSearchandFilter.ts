import { useIsFocused } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { MoviesProps } from "../../../../../models/Movies";
import { favorites } from "../../../../../store/FavoritesContext/FavoritesContext";
import { retrieveData } from "../../../../../utils/AsyncStorage";

export const useSearchandFilterHandle = () => {
  const [fetchedFavoriteMovies, setFetchedFavoriteMovies] =
    useState<MoviesProps[]>();
  const [selectedId, setSelectedId] = useState<number[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [noMatchingMovie, setNoMatchingMovie] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const useFavorites = useContext(favorites);
  const isFocused = useIsFocused();
  const getFavorites = async () => {
    try {
      // Retrieve the favorite movies from AsyncStorage
      const favoriteMovies: MoviesProps[] = await retrieveData(
        "@FavoriteMovies"
      );
      favoriteMovies.forEach((item) => console.log(item.title));
      return favoriteMovies;
    } catch (error) {
      console.error("Error retrieving wishlist:", error);
    }
  };

  const fetchFavorites = async () => {
    setIsFetching(true);
    const favoriteMovies = await getFavorites();
    setIsFetching(false);
    if (favoriteMovies) {
      setNoMatchingMovie(false);
      setFetchedFavoriteMovies(favoriteMovies);
    } else {
      setNoMatchingMovie(true);
      setFetchedFavoriteMovies([]);
    }
    
  };
  useEffect(() => {
    if (isFocused) {
      fetchFavorites();
    }
  }, [isFocused, useFavorites.favoritesData]); //reduxSlice]);
  useEffect(() => {
    if (selectedId.length === 0) {
      //if no filtering so check on search bar
      if (searchText.trim().length === 0) {
        setFetchedFavoriteMovies(fetchedFavoriteMovies);
        if (fetchedFavoriteMovies) {
          setNoMatchingMovie(true);
        } else {
          setNoMatchingMovie(false);
        }
      } else {
        const searchMovies = fetchedFavoriteMovies.filter((item) =>
          item.title.toLowerCase().startsWith(searchText.trim().toLowerCase())
        );
        if (searchMovies?.length === 0) {
          
        setFetchedFavoriteMovies([]);
          setNoMatchingMovie(true);
        } else {
          
        setFetchedFavoriteMovies(searchMovies);
          setNoMatchingMovie(false);
        }
      }
    } else {
      //check if more than an id is selected so
      // return all movies including in his genres ids thoses selected id
      const matchingMovies = fetchedFavoriteMovies.filter((movie) =>
        selectedId.every((genreID) => movie.genre_ids.includes(genreID))
      );
      if (searchText.trim().length === 0) {
        if (matchingMovies?.length === 0) {
          
        setFetchedFavoriteMovies([]);
          setNoMatchingMovie(true);
        } else {
          
        setFetchedFavoriteMovies(matchingMovies);
          setNoMatchingMovie(false);
        }
      } else {
        const searchMovies = matchingMovies.filter((item) =>
          item.title.toLowerCase().startsWith(searchText.trim().toLowerCase())
        );
        if (searchMovies.length == 0) {
          setFetchedFavoriteMovies(matchingMovies);
          setNoMatchingMovie(true);
        } else {
          setFetchedFavoriteMovies(searchMovies);
          setNoMatchingMovie(false);
        }
      }
      //console.log(matchingMovies);
    }
  }, [selectedId, searchText]);
  const handleClearSearch = () => {
    setSearchText("");
    Keyboard.dismiss();
  };
  const handleClearFilter = () => {
  
    setSelectedId([]);
  };
  return {
    handleClearFilter,
    handleClearSearch,
    selectedId,
    searchText,
    fetchedFavoriteMovies,
    isFetching,
    noMatchingMovie,
    setSelectedId,
    setSearchText
  };
};

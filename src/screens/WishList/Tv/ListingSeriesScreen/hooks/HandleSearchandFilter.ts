import { useIsFocused } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { TvProps } from "../../../../../models/Tv";
import { favorites } from "../../../../../store/FavoritesContext/FavoritesContext";
import { retrieveData } from "../../../../../utils/AsyncStorage";
export const useSearchandFilterHandle = () => {
  const [fetchedFavoriteSeries, setFetchedFavoriteSeries] = useState<TvProps[]>();
  const [selectedId, setSelectedId] = useState<number[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [noMatchingSeries, setNoMatchingSeries] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const isFocused = useIsFocused();

  const useFavorites = useContext(favorites);
  const handleClearSearch=()=>{
    setSearchText('');
    Keyboard.dismiss();
  }
  const getFavorites = async () => {
    try {
      // Retrieve the favorite movies from AsyncStorage
      setIsFetching(true);
      const existingWishlist = await retrieveData('@FavoriteSeries');
      const favoriteSeries: TvProps[] = existingWishlist ? existingWishlist : [];
      setFetchedFavoriteSeries(favoriteSeries);
      setIsFetching(false);
      if (favoriteSeries) {
        setNoMatchingSeries(false);
      }
      else {
        setNoMatchingSeries(true);
      }

      //console.log("favoritessss",);
      favoriteSeries.forEach((item) => console.log(item.name));
    } catch (error) {
      console.error('Error retrieving wishlist:', error);
      setIsFetching(false);
    }
  };
  useEffect(() => {
    getFavorites();
  }, [useFavorites.favoritesData]);//reduxSlice]);
  const handleClearFilter = () => {
    console.log("cleared");
    setSelectedId([]);
  }
  useEffect(() => {
    console.log(selectedId);
    if (selectedId.length == 0) {
      if (searchText.trim().length == 0) {
        setFetchedFavoriteSeries(fetchedFavoriteSeries);
        if (fetchedFavoriteSeries) {
          setNoMatchingSeries(true);
        }
        else {
          setNoMatchingSeries(false);
        }
      }
      else {
        const searchSeries = fetchedFavoriteSeries.filter((item) => item.name.toLowerCase().startsWith(searchText.trim().toLowerCase()));
        setFetchedFavoriteSeries(searchSeries);
        if (searchSeries.length == 0) {
          setNoMatchingSeries(true);
        }
        else {
          setNoMatchingSeries(false);
        }
      }

    }

    else {
      //check if more than an id is selected so
      // return all movies including in his genres ids thoses selected id 
      const matchingSeries = fetchedFavoriteSeries.filter((series) =>
        selectedId.every((genreID) => series.genre_ids.includes(genreID)));
      if (searchText.trim().length === 0) {

        setFetchedFavoriteSeries(matchingSeries);
        if (matchingSeries?.length === 0) {
          setNoMatchingSeries(true);
        }
        else {
          setNoMatchingSeries(false);
        }

      }

      else {
        const searchSeries = matchingSeries.filter((item) => item.name.toLowerCase().startsWith(searchText.trim().toLowerCase()));
        if (searchSeries.length == 0) {
          setFetchedFavoriteSeries(matchingSeries);
          setNoMatchingSeries(true);
        }
        else {
          setFetchedFavoriteSeries(searchSeries);
          setNoMatchingSeries(false);
        }
      }
      //console.log(matchingSeries);
    }
  }, [selectedId, searchText]);
  useEffect(() => {
    if (isFocused) {

      getFavorites();
    }
  }, [isFocused, useFavorites.favoritesData]);
  return{
    handleClearFilter,
    handleClearSearch,
    selectedId,
    searchText,
    fetchedFavoriteSeries,
    isFetching,
    noMatchingSeries,
    setSelectedId,
    setSearchText

  }
};

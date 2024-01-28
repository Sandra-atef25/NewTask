
import {  View, FlatList, TextInput, Button } from "react-native";
import { useContext, useEffect, useState } from 'react';
import { MoviesProps, ItemData } from '../../../Models/Movies';
import {seriesGenres } from '../../../Data/mocks';
import { retrieveTVData } from '../../../Components/AsyncStorage';
import styles from "../../../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling";
import { Ionicons } from "@expo/vector-icons";
import { favorites } from "../../../Components/MoviesContext/favoritesContext";
import Listing from "../../../Components/Listing";
import TVSeriesList from "../../../Components/TVSeries";
import { Item } from "../../../Components/Genres";
import { TvProps } from "../../../Models/Tv";
function FavoritesScreen({ navigation }) {
  const [fetchedFavoriteSeries, setFetchedFavoriteSeries] = useState<TvProps[]>();
  const [selectedId, setSelectedId] = useState<number[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [noMatchingSeries, setNoMatchingSeries] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  
  const useFavorites=useContext(favorites);
    
  const getFavorites = async () => {
    try {
      // Retrieve the favorite movies from AsyncStorage
      setIsFetching(true);
      const existingWishlist = await retrieveTVData('@FavoriteSeries');
      const favoriteSeries:TvProps[] = existingWishlist ? JSON.parse(existingWishlist) : [];
      setFetchedFavoriteSeries(favoriteSeries);
      setIsFetching(false);
      //console.log("favoritessss",);
      favoriteSeries.forEach((item)=>console.log(item.name));
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
        setNoMatchingSeries(false);
      }
      else {
        const searchSeries = fetchedFavoriteSeries.filter((item) => item.name.toLowerCase().startsWith(searchText.trim().toLowerCase()));
        setFetchedFavoriteSeries(searchSeries);
        if (searchSeries.length == 0) {
          setNoMatchingSeries(true);
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

      }
      else if (fetchedFavoriteSeries.length === 0) {
        setNoMatchingSeries(true);
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
      console.log(matchingSeries);
    }
  }, [selectedId, searchText]);


  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = selectedId.includes(item.id) ? 'black' : 'gray';
    const color = selectedId.includes(item.id) ? 'white' : 'black';
    const pressHandle = (item: ItemData) => {
      //prevList
      // if prevList includes item.id -> remove item.id
      // else add item.id
      setSelectedId((prevList) => {
        return prevList.includes(item.id) ? prevList.filter((id) => id !== item.id) : [...prevList, item.id]
      });


    };

    return (
      <Item
        item={item}
        onPress={pressHandle.bind(this, item)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  const renderSeries = ({ item: series }: { item: TvProps }) => {
    const pressHandle = () => {
      navigation.navigate("TheMovieSelected", { TvSeriesDetails: series });
    };

    return (
      <TVSeriesList tvList={series}
        onPress={pressHandle}
      />
    );
  };


  return (
    <Listing fetchedData={fetchedFavoriteSeries} handleEndReached={undefined} isFetching={isFetching} noMatchingData={noMatchingSeries} renderData={renderSeries} title="No Favorite Series">
      <View style={clicked ? styles.textClicked : styles.textUnclicked}>
        <Ionicons name='search' size={20} color='navy' style={styles.icon}></Ionicons>

        <TextInput value={searchText} onChangeText={setSearchText} style={styles.textin}
          onFocus={() => setClicked(true)} onBlur={() => setClicked(false)} />
      </View>
      <View>

        <Button title="Clear Filter" onPress={handleClearFilter} />
      </View>
      <View style={styles.ItemContainer}>
        <FlatList<any> data={seriesGenres} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} style={styles.ItemsContainers}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false} >
        </FlatList>
      </View>
    </Listing>
      
  );
};
export default FavoritesScreen;

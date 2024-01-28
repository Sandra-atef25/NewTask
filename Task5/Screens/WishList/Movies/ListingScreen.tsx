
import { Text, View, FlatList, TouchableOpacity, TextInput, Button, Image,RefreshControl } from "react-native";
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavoriteMoviesContext } from '../../../Components/MoviesContext/MoviesContext';
import { MoviesProps, ItemData } from '../../../Models/Movies';
import { movies, movieGenres } from '../../../Data/mocks';
import { retrieveData } from '../../../Components/AsyncStorage';
import styles from "../../../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling";
import { Ionicons } from "@expo/vector-icons";
import LoadingOverlay from "../../../UIStyling/MoviesAndTVStyling/LoadingOverlay";
import { favorites } from "../../../Components/MoviesContext/favoritesContext";
import Listing from "../../../Components/Listing";
import { MoviesList } from "../../../Components/Movies";
import { Item } from "../../../Components/Genres";
function FavoritesScreen({ navigation }) {
  const [fetchedFavoriteMovies, setFetchedFavoriteMovies] = useState<MoviesProps[]>();
  const [selectedId, setSelectedId] = useState<number[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [noMatchingMovie, setNoMatchingMovie] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  
  const useFavorites=useContext(favorites);
    
  const getFavorites = async () => {
    try {
      // Retrieve the favorite movies from AsyncStorage
      setIsFetching(true);
      const existingWishlist = await retrieveData('@FavoriteMovies');
      const favoriteMovies:MoviesProps[] = existingWishlist ? JSON.parse(existingWishlist) : [];
      setFetchedFavoriteMovies(favoriteMovies);
      setIsFetching(false);
      //console.log("favoritessss",);
      favoriteMovies.forEach((item)=>console.log(item.title));
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
        setFetchedFavoriteMovies(fetchedFavoriteMovies);
        setNoMatchingMovie(false);
      }
      else {
        const searchMovies = fetchedFavoriteMovies.filter((item) => item.title.toLowerCase().startsWith(searchText.trim().toLowerCase()));
        setFetchedFavoriteMovies(searchMovies);
        if (searchMovies.length == 0) {
          setNoMatchingMovie(true);
        }
      }

    }

    else {
      //check if more than an id is selected so
      // return all movies including in his genres ids thoses selected id 
      const matchingMovies = fetchedFavoriteMovies.filter((movie) =>
        selectedId.every((genreID) => movie.genre_ids.includes(genreID)));
      if (searchText.trim().length === 0) {

        setFetchedFavoriteMovies(matchingMovies);

      }
      else if (fetchedFavoriteMovies.length === 0) {
        setNoMatchingMovie(true);
      }
      else {
        const searchMovies = matchingMovies.filter((item) => item.title.toLowerCase().startsWith(searchText.trim().toLowerCase()));
        if (searchMovies.length == 0) {
          setFetchedFavoriteMovies(matchingMovies);
          setNoMatchingMovie(true);
        }
        else {
          setFetchedFavoriteMovies(searchMovies);
          setNoMatchingMovie(false);
        }
      }
      console.log(matchingMovies);
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
  const renderMovies = ({ item: movie }: { item: MoviesProps }) => {
    const pressHandle = () => {
      navigation.navigate("TheMovieSelected", { MoviesDetails: movie });
    };

    return (
      <MoviesList moviesL={movie}
        onPress={pressHandle}
      />
    );
  };


  return (
    <Listing fetchedData={fetchedFavoriteMovies} handleEndReached={undefined} isFetching={isFetching} noMatchingData={noMatchingMovie} renderData={renderMovies} title="No Favorite Movies">
      <View style={clicked ? styles.textClicked : styles.textUnclicked}>
        <Ionicons name='search' size={20} color='navy' style={styles.icon}></Ionicons>

        <TextInput value={searchText} onChangeText={setSearchText} style={styles.textin}
          onFocus={() => setClicked(true)} onBlur={() => setClicked(false)} />
      </View>
      <View>

        <Button title="Clear Filter" onPress={handleClearFilter} />
      </View>
      <View style={styles.ItemContainer}>
        <FlatList<any> data={movieGenres} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} style={styles.ItemsContainers}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false} >
        </FlatList>
      </View>
    </Listing>
      
  );
};
export default FavoritesScreen;

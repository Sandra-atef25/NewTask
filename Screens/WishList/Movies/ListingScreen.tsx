import { View, Text, StyleSheet } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  {FavoriteMoviesContext } from '../../../Components/MoviesContext/MoviesContext';
import { MoviesProps,ItemData } from '../../../Models/Movies';
import { movies,movieGenres } from '../../../Data/mocks';
function FavoritesScreen() {
    const [fetchedFavoriteMovies,setFetchedFavoriteMovies]=useState<MoviesProps[]>();
    async function fetchedMovies (){
        const resp=await AsyncStorage.getItem("FavoriteMovies");
        console.log(resp);
        setFetchedFavoriteMovies(JSON?.parse(resp));
        console.log("Fetched:",fetchedFavoriteMovies);
    }
    useEffect(()=>{
        fetchedMovies();
    },[])
  

  return <View>
    <Text>no favorites</Text>
    </View>
  ;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
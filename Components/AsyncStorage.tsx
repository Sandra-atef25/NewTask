import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (favoriteMovies:string) => {
    try {
      await AsyncStorage.setItem("FavoriteMovies",favoriteMovies);
      console.log('Movie saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
    }
};
export const removeData = async (movieId:string) => {
    try {
      await AsyncStorage.removeItem(movieId);
      console.log('Data removed successfully');
    } catch (error) {
      console.error('Error removing data:', error);
    }
};
  
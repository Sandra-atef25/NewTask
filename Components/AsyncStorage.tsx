import AsyncStorage from '@react-native-async-storage/async-storage';
export const saveItemData = async (movieId:string,favoriteMovie:string) => {
  try {
    if(favoriteMovie?.length===null){
      await AsyncStorage.setItem(movieId,"");
    }
    else{
      await AsyncStorage.setItem(movieId,favoriteMovie);
    }
    console.log('Movie saved successfully');
  } catch (error) {
    console.error('Error saving data:', error);
  }
};
export const removeItemData = async (movieId:string) => {
  try {
    await AsyncStorage.removeItem(movieId);
    console.log('Data removed successfully');
  } catch (error) {
    console.error('Error removing data:', error);
  }
};
export const saveData = async (favoriteMovies:string) => {
    try {
      if(favoriteMovies?.length===null){
        //console.log("nullllllllllll");
        await AsyncStorage.setItem("@FavoriteMovies","");
      }
      else{
        //console.log("favoriteeeeeeeeeeee",favoriteMovies);
        await AsyncStorage.setItem("@FavoriteMovies",favoriteMovies);
      }
      console.log('Movie saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
    }/*finally{
      AsyncStorage.getItem("@FavoriteMovies").then((value)=>{
        console.log(value);
      })
    }*/
};
export const removeData = async (movieId:string) => {
    try {
      await AsyncStorage.removeItem(movieId);
      console.log('Data removed successfully');
    } catch (error) {
      console.error('Error removing data:', error);
    }
};
export const retrieveData=async (movieID:string)=>{
  try{
    const data= await AsyncStorage.getItem(movieID);
   // console.log(data);
    if(data!==null){
      //console.log("data=  ",data);
    }
    return data;
  }
  catch(error){
    console.log("error retrieving data");
  }
} 
export const clearData=async()=>{
  
  try {
    await AsyncStorage.clear();
    console.log('Data cleared successfully');
  } catch (error) {
    console.error('Error removing data:', error);
  }
}

export const saveTVData = async (favoriteseries:string) => {
    try {
      if(favoriteseries?.length===null){
        await AsyncStorage.setItem("@FavoriteSeries","");
      }
      else{
        await AsyncStorage.setItem("@FavoriteSeries",favoriteseries);
      }
      console.log('Movie saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
    }
};
export const removeTVData = async (seriesId:string) => {
    try {
      await AsyncStorage.removeItem(seriesId);
      console.log('Data removed successfully');
    } catch (error) {
      console.error('Error removing data:', error);
    }
};
export const retrieveTVData=async (seriesID:string)=>{
  try{
    const data= await AsyncStorage.getItem(seriesID);
    console.log(data);
    if(data!==null){
      console.log("data=  ",data);
    }
    return data;
  }
  catch(error){
    console.log("error retrieving data");
  }
} 
export const clearTVData=async()=>{
  
  try {
    await AsyncStorage.clear();
    console.log('Data cleared successfully');
  } catch (error) {
    console.error('Error removing data:', error);
  }
}

  
import { Text, View, ScrollView, Image } from "react-native";
import { useContext,useEffect, useState } from "react";
import { ItemData, TvProps } from "../../../Models/Tv";
import Title from "../../../Components/Title";
import styles from "../../../UIStyling/MoviesAndTVStyling/MoviesAndTvDetailsScreen";
import { fetchTVGenres } from "../../../util/http";
import IconButton from "../../../Components/StarIconButton";
import DetailsScreen from '../../../Components/DetailsSeries';
import { retrieveTVData, saveTVData } from "../../../Components/AsyncStorage";
import { favorites } from "../../../Components/MoviesContext/favoritesContext";
function DetailsTVScreen({ navigation, route }) {
   const BASE_URL_IMAGE="https://image.tmdb.org/t/p/original";
    const TvSeriesDetails:TvProps=route?.params?.SeriesDetails;
    const posterPathNew:string=BASE_URL_IMAGE+TvSeriesDetails.poster_path.toString();
    const [fetchedGenres,setFetchedGenres]=useState<ItemData[]>();
   const [seriesIsFavorite, setSeriesIsFavorite] = useState<boolean>();
   const [fetchedData, setFetchedData] = useState<TvProps[]>([]);
   
   const favoritesdata=useContext(favorites);
    async function fetchingGenres() {
            const fetchedTvGenres=   await fetchTVGenres();
            setFetchedGenres(fetchedTvGenres);
        
    } 
   async function fetchingg() {
       retrieveTVData("@FavoriteSeries").then((value) => {
           const result: TvProps[] = JSON.parse(value);
           setSeriesIsFavorite(
               result?.some((series) => series.id === TvSeriesDetails.id));
      
           if (result === null) {
               setFetchedData([]);
           }
           else {

               setFetchedData(result);
           }
       });

   }
 
   const heartButtonPressHandler = () => {

       if (!seriesIsFavorite) {
           setFetchedData((prevList) => {
               const x = [...prevList, TvSeriesDetails];
               return x;
           }
           );

       }
       else {
           setFetchedData(() => {
               return fetchedData?.filter((item) => item.id !== TvSeriesDetails.id)

           });

       }
       
       favoritesdata.toggleBoolean();
       // Update local state
       setSeriesIsFavorite(!seriesIsFavorite);
   }

   useEffect(() => {
       fetchingGenres();
       fetchingg();
   }, [])
   useEffect(() => {
       // Update AsyncStorag
       saveTVData(JSON.stringify(fetchedData));
   }, [fetchedData]);
   const matchingGenres = fetchedGenres?.filter((genre) => TvSeriesDetails.genre_ids.includes(genre.id))
   const pressHandle=()=>{
       navigation.goBack();
   }
   return (
       <DetailsScreen TvSeries={TvSeriesDetails} heartButtonPressHandler={heartButtonPressHandler} matchingGenres={matchingGenres} seriesIsFavorite={seriesIsFavorite} posterPath={posterPathNew} pressHandle={pressHandle}/>
   );
}
export default DetailsTVScreen;

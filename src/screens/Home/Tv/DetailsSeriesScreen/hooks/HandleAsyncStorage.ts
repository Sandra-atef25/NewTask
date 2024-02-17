import { useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { SeriesRouteProp } from "../../../../../components/templates/series/StackOfSeries";
import { seriesGenres } from "../../../../../data/mocks";
import { TvProps } from "../../../../../models/Tv";
import { favorites } from "../../../../../store/FavoritesContext/FavoritesContext";
import { retrieveData, saveData } from "../../../../../utils/AsyncStorage";

export const useHandleAsyncStorage = () => {
    
    const route = useRoute<SeriesRouteProp>();
    const TvSeriesDetails: TvProps = route?.params?.serieDetails;

    const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";
    const posterPathNew: string = BASE_URL_IMAGE + TvSeriesDetails.poster_path.toString();

    const [seriesIsFavorite, setSeriesIsFavorite] = useState<boolean>();
    const [fetchedData, setFetchedData] = useState<TvProps[]>([]);

    const favoritesdata = useContext(favorites);
    const matchingGenres=seriesGenres?.filter((genre) => TvSeriesDetails?.genre_ids.includes(genre.id));
   
    //this function used to get the data of movie selected from async storage at the beginning
    async function fetchingg() {
        const favoriteSeries:TvProps[]=await retrieveData("@FavoriteSeries");
        if(favoriteSeries===null){
            setFetchedData([]);
        }
        else {
            setFetchedData(favoriteSeries);
        }
        return favoriteSeries;

    }
    const checkSeriesIsFavorite=async()=>{
        const result=await fetchingg();
        setSeriesIsFavorite(
            result?.some((series) => series.id === TvSeriesDetails.id));
        
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
        //toggle the icon if it is favorite or not
        favoritesdata.toggleBoolean();
        // Update local state
        setSeriesIsFavorite(!seriesIsFavorite);
    }
    useEffect(()=>{
        checkSeriesIsFavorite();
    },[])
    useEffect(() => {
        // Update AsyncStorag
        saveData("@FavoriteSeries", fetchedData);
    }, [fetchedData]);
    return {
        posterPathNew,
        TvSeriesDetails,
        seriesIsFavorite,
        matchingGenres,
        heartButtonPressHandler,
    };
}



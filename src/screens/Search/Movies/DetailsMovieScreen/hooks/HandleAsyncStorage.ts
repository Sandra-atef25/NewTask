import { RouteProp, useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { MoviesStackParamList } from "../../../../../components/templates/movies/StackOfMovies";
import { movieGenres } from "../../../../../data/mocks";
import { MoviesProps } from "../../../../../models/Movies";
import { favorites } from "../../../../../store/FavoritesContext/FavoritesContext";
import { retrieveData,saveData } from "../../../../../utils/AsyncStorage";

export const useHandleAsyncStorage = () => {
    const route = useRoute<RouteProp<MoviesStackParamList>>();
    const MovieDetails: MoviesProps = route?.params?.movieDetails;
    const [movieIsFavorite, setMovieIsFavorite] = useState<boolean>();
    const [fetchedData, setFetchedData] = useState<MoviesProps[]>([]);
    const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";
    const posterPathNew: string = BASE_URL_IMAGE + MovieDetails?.poster_path.toString();
    const favoriteMovie = useContext(favorites);
    //this function used to get the data of movie selected from async storage at the beginning
    async function fetchingg() {
        const favoritesMovies:MoviesProps[]= await retrieveData("@FavoriteMovies");
            if (favoritesMovies === null) {
                setFetchedData([]);
            }
            else {
                setFetchedData(favoritesMovies);
            }
           return favoritesMovies;

    }
    const checkMovieIsFavorite=async()=>{
        const result=await fetchingg();
        setMovieIsFavorite(
            result?.some((movie) => movie.id === MovieDetails.id));
        
    }

    const heartButtonPressHandler = () => {

        if (!movieIsFavorite) {
            setFetchedData((prevList) => {
                const x = [...prevList, MovieDetails];
                return x;
            }
            );

        }
        else {
            setFetchedData(() => {
                return fetchedData?.filter((item) => item.id !== MovieDetails.id)

            });

        }
        // Update local state
        setMovieIsFavorite(!movieIsFavorite);
        
        //toggle the icon if it is favorite or not
        favoriteMovie.toggleBoolean();
        
    }
    const matchingGenres = movieGenres?.filter((genre) => MovieDetails?.genre_ids.includes(genre.id))
   
    useEffect(()=>{
        checkMovieIsFavorite();
    },[]);
    useEffect(() => {
        // Update AsyncStorag
        saveData("@FavoriteMovies", fetchedData);
    }, [fetchedData]);
    return {
        posterPathNew,
        MovieDetails,
        movieIsFavorite,
        heartButtonPressHandler,
        matchingGenres
    }

}

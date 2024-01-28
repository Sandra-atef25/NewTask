
import { ItemData, MoviesProps } from "../../../Models/Movies";
import {  useContext, useEffect, useState } from "react";
import { fetchMoviesGenres } from "../../../util/http";
import LoadingOverlay from "../../../UIStyling/MoviesAndTVStyling/LoadingOverlay";
import { saveData, retrieveData, clearData } from "../../../Components/AsyncStorage";
import DetailsScreen from "../../../Components/DetailsMovie";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite,getFavorite } from "../../../Components/MoviesContext/FavoritesBoolean";
import { favorites } from "../../../Components/MoviesContext/favoritesContext";
const DetailsMoviesScreen = ({ route, navigation }) => {

    const MovieDetails: MoviesProps = route.params.MoviesDetails;
    const [isFteching, setIsFetchingMovies] = useState(true);
    const [fetchedGenres, setFetchedGenres] = useState<ItemData[]>();
    const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";
    const posterPathNew: string = BASE_URL_IMAGE + MovieDetails.poster_path.toString();
    const [movieIsFavorite, setMovieIsFavorite] = useState<boolean>();
    const [fetchedData, setFetchedData] = useState<MoviesProps[]>([]);
    //const booleanFavorite=useSelector(state=>state.favorites);
    //const dispatch =useDispatch();
    const favoritesdata=useContext(favorites);
    async function fetchingg() {
        retrieveData("@FavoriteMovies").then((value) => {
            const result: MoviesProps[] = JSON.parse(value);
            //const result:MoviesProps[] =Favoritemovies?JSON.parse(Favoritemovies):[];
            setMovieIsFavorite(
                result?.some((movie) => movie.id === MovieDetails.id));
           // console.log("resulting array", result);
            if (result === null) {
                setFetchedData([]);
            }
            else {

                setFetchedData(result);
            }
        });
        //console.log("favorites fetched",Favoritemovies);

    }
    async function getMoviesGenresList() {
        setIsFetchingMovies(true);
        const moviesGenresList = await fetchMoviesGenres();
        setIsFetchingMovies(false);
        setFetchedGenres(moviesGenresList);

    }
  
    const heartButtonPressHandler = () => {

        if (!movieIsFavorite) {
            //console.log(MovieDetails);
            setFetchedData((prevList) => {
                const x = [...prevList, MovieDetails];
                //prevList.push(MovieDetails);
                //console.log("mmmmmmmmmmmmmmmm", x);
                return x;
            }
            );
            
        }
        else {
            setFetchedData(() => {
                return fetchedData?.filter((item) => item.id !== MovieDetails.id)

            });
           
        }
        favoritesdata.toggleBoolean();
        // Update local state
        setMovieIsFavorite(!movieIsFavorite);
    }

    useEffect(() => {
        //clearData();
        // console.log(MovieDetails);
        getMoviesGenresList();
        fetchingg();
    }, [])
    useEffect(() => {
        // Update AsyncStorag
        saveData(JSON.stringify(fetchedData));
        console.log("favorite movie now", fetchedData);
    }, [fetchedData]);
    
    const matchingGenres = fetchedGenres?.filter((genre) => MovieDetails.genre_ids.includes(genre.id))
    //console.log(fetchedGenres.every((item)=>MovieDetails.genre_ids.includes(item.id)));
    const pressHandle=()=>{
        navigation.goBack();
    }
    if (isFteching) {
        return <LoadingOverlay />
    }
    return (
        <DetailsScreen Movie={MovieDetails} heartButtonPressHandler={heartButtonPressHandler} matchingGenres={matchingGenres} movieIsFavorite={movieIsFavorite} posterPath={posterPathNew} pressHandle={pressHandle}/>
    );
   
    
}
export default DetailsMoviesScreen;



import {Text,View,ScrollView,Image} from "react-native";
import { ItemData, MoviesProps } from "../../../Models/Movies";
import styles from "../../../UIStyling/MoviesAndTVStyling/MoviesAndTvDetailsScreen";
import Title from "../../../Components/Title";
import { useContext, useEffect,useLayoutEffect, useState } from "react";
import { fetchMoviesGenres } from "../../../util/http";
import LoadingOverlay from "../../../UIStyling/MoviesAndTVStyling/LoadingOverlay";
import IconButton from "../../../Components/StarIconButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveData,removeData} from "../../../Components/AsyncStorage";
const DetailsMoviesScreen=({route,navigation})=>{
      
    const MovieDetails:MoviesProps =route.params.MoviesDetails;
    const [isFteching,setIsFetchingMovies]=useState(true);
    const [fetchedGenres,setFetchedGenres]=useState<ItemData[]>();
    const BASE_URL_IMAGE="https://image.tmdb.org/t/p/original";
    const posterPathNew:string=BASE_URL_IMAGE+MovieDetails.poster_path.toString();
    const[movieIsFavorite,setMovieIsFavorite]=useState(false);
    
    const favoriteMovies:MoviesProps[]=new Array<MoviesProps>;
    const heartButtonPressHandler=()=>{
       if(!movieIsFavorite){
        favoriteMovies.push(MovieDetails);
        setMovieIsFavorite(true);
        console.log(favoriteMovies);
        saveData(JSON.stringify(favoriteMovies));
        }
        else {
            favoriteMovies.filter((item)=>item.id!==MovieDetails.id);
            setMovieIsFavorite(false);
            
            removeData(JSON.stringify(MovieDetails.id));
        }

    
        
    }

    useLayoutEffect(()=>{
        async function getMoviesGenresList() {
            setIsFetchingMovies(true);
            const moviesGenresList = await fetchMoviesGenres();
            setIsFetchingMovies(false);
           setFetchedGenres(moviesGenresList);
            
        }
        getMoviesGenresList();
        
        navigation.setOptions({ 
            title:MovieDetails.title,
            borderColor:'white',
            headerBackTitle:'white',headerTintColor:'white',
            headerRight: () => {
                return (
                  <IconButton 
                    icon={movieIsFavorite?"heart":"heart-outline"}
                    color={movieIsFavorite?'red':'white'}
                    onPress={heartButtonPressHandler}
                  />
                );
              },
            
           
        });
    },[navigation,MovieDetails,movieIsFavorite]);
    const matchingGenres=fetchedGenres?.filter((genre)=>MovieDetails.genre_ids.includes(genre.id))
    //console.log(fetchedGenres.every((item)=>MovieDetails.genre_ids.includes(item.id)));
    if(isFteching){
        return <LoadingOverlay/>
    }
    return (
        <ScrollView style={styles.Container}>
           { /*<View style={styles.NameofSelectedItem}>
                <Text style={styles.TextName}>{MovieDetails.title}</Text>
    </View>*/}
            <View style={styles.Details}>
            <Image source={{uri:posterPathNew}} style={{width:'100%',height:500}}></Image>
                <Title TextIen="ID: " title ={MovieDetails.id}/>
                <Title TextIen="Adult: "title={MovieDetails.adult.valueOf()?"True":"False"} />
                <Title TextIen="Backdrop_Path: "title={MovieDetails.backdrop_path}/>
                <Title TextIen="Genres_Ids: "title ={matchingGenres?.map((genre)=>genre.name)?.toString()}/>
                <Title TextIen="Origin_Language: "title={MovieDetails.original_language}/>
                <Title TextIen="Original_Title: "title={MovieDetails.original_title}/>
                <Title TextIen="OverView: "title={MovieDetails.overview}/>
                <Title TextIen="Popularity: "title={MovieDetails.popularity}/>
                <Title TextIen="Vote_Average: "title={MovieDetails.vote_average}/>
                <Title TextIen="Vote_Count: "title={MovieDetails.vote_count}/>
                <Title TextIen="Video: " title={MovieDetails.video.valueOf()?"True":"False"}/>
            </View>
            
        </ScrollView>
    );
}
export default DetailsMoviesScreen;

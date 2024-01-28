import {Text,View,ScrollView,Image} from "react-native";
import { ItemData, MoviesProps } from "../../../Models/Movies";
import styles from "../../../UIStyling/MoviesAndTVStyling/MoviesAndTvDetailsScreen";
import Title from "../../../Components/Title";
import { useEffect, useLayoutEffect, useState } from "react";
import { fetchMoviesGenres } from "../../../util/http";
import LoadingOverlay from "../../../UIStyling/MoviesAndTVStyling/LoadingOverlay";
import IconButton from "../../../Components/StarIconButton";
function DetailsMoviesScreen({route,navigation}){
      
    const MovieDetails:MoviesProps =route.params.MoviesDetails;
   
    const [isFteching,setIsFetchingMovies]=useState(true);
    const [fetchedGenres,setFetchedGenres]=useState<ItemData[]>();
    const BASE_URL_IMAGE="https://image.tmdb.org/t/p/original";
    const posterPathNew:string=BASE_URL_IMAGE+MovieDetails.poster_path.toString();
    
    function heartButtonPressHandler(){
        console.log("pressed");
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
                    icon="heart-outline"
                    color='white'
                    onPress={heartButtonPressHandler}
                  />
                );
              },
            
        });
    },[navigation,MovieDetails]);
    const matchingGenres=fetchedGenres?.filter((genre)=>MovieDetails.genre_ids.includes(genre.id))
    //console.log(fetchedGenres.every((item)=>MovieDetails.genre_ids.includes(item.id)));
    if(isFteching){
        return <LoadingOverlay/>
    }
    return (
        <ScrollView style={styles.Container}>
            <View style={styles.NameofSelectedItem}>
                <Text style={styles.TextName}>{MovieDetails.title}</Text>
            </View>
            <View style={styles.Details}>
            <Image source={{uri:posterPathNew}} style={{width:'100%',height:500}}></Image>
                <Title TextIen="ID: " title ={MovieDetails.id}/>
                <Title TextIen="Adult: "title={MovieDetails.adult.valueOf()?"True":"False"} />
                <Title TextIen="Backdrop_Path: "title={MovieDetails.backdrop_path}/>
                <Title TextIen="Genres_Ids: "title ={matchingGenres?.map((genre)=>genre.name).toString()}/>
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

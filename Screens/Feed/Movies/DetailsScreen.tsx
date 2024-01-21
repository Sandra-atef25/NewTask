import {Text,View,ScrollView,Image} from "react-native";
import { ItemData, MoviesProps } from "../../../Models/Movies";
import styles from "../../../UIStyling/MoviesAndTVStyling/MoviesAndTvDetailsScreen";
import Title from "../../../Components/Title";
import { useLayoutEffect } from "react";
import { movies,movieGenres } from "../../../Data/mocks";
function DetailsMoviesScreen({route,navigation}){
      
    const MovieDetails:MoviesProps =route.params.MoviesDetails;
   /* navigation.setOption({
        headerTitle:MovieDetails.title
    })*/
    const BASE_URL_IMAGE="https://image.tmdb.org/t/p/original";
    const posterPathNew:string=BASE_URL_IMAGE+MovieDetails.poster_path.toString();
    
    useLayoutEffect(()=>{
        const Movietitle = movies.find(
            (movie) => movie.id=== MovieDetails.id
          ).title;
   
        navigation.setOptions({ 
            title:Movietitle,
        });
    },[navigation,MovieDetails]);
    const matchingGenres=movieGenres.filter((genre)=>MovieDetails.genre_ids.includes(genre.id))
    
    
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
                <Title TextIen="Genres_Ids: "title ={matchingGenres.map((genre)=>genre.name).toString()}/>
                <Title TextIen="Origin_Language: "title={MovieDetails.original_language}/>
                <Title TextIen="Original_Title: "title={MovieDetails.original_title}/>
                <Title TextIen="OverView: "title={MovieDetails.overview}/>
                <Title TextIen="Popularity: "title={MovieDetails.popularity}/>
                <Title TextIen="Poster_Path: "title={MovieDetails.poster_path}/>
                <Title TextIen="Vote_Average: "title={MovieDetails.vote_average}/>
                <Title TextIen="Vote_Count: "title={MovieDetails.vote_count}/>
                <Title TextIen="Video: " title={MovieDetails.video.valueOf()?"True":"False"}/>
            </View>
            
        </ScrollView>
    );
    return (
        <View>
            <Text>
                this is the details screen {MovieDetails.title}
            </Text>
        </View>
    );
}
export default DetailsMoviesScreen;

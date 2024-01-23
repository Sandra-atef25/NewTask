import {Text,View,ScrollView,Image} from "react-native";
import { useEffect, useState } from "react";
import { ItemData, TvProps } from "../../../Models/Tv";
import Title from "../../../Components/Title";
import styles from "../../../UIStyling/MoviesAndTVStyling/MoviesAndTvDetailsScreen";
import { fetchTVGenres } from "../../../util/http";
import IconButton from "../../../Components/StarIconButton";
function DetailsTVScreen({navigation,route}){
    const BASE_URL_IMAGE="https://image.tmdb.org/t/p/original";
    const TvSeriesDetails:TvProps=route?.params?.SeriesDetails;
    const posterPathNew:string=BASE_URL_IMAGE+TvSeriesDetails.poster_path.toString();
    
    const [fetchedGenres,setFetchedGenres]=useState<ItemData[]>();
    async function fetchingGenres() {
        
            const fetchedTvGenres=   await fetchTVGenres();
            setFetchedGenres(fetchedTvGenres);
    } 
    function heartButtonPressHandler(){
        console.log("pressed");
    }
    useEffect(()=>{
        fetchingGenres();
        navigation.setOptions({ 
            title:TvSeriesDetails.name,
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
    },[navigation,TvSeriesDetails]);
    const matchingGenres=fetchedGenres?.filter((genre)=>TvSeriesDetails.genre_ids.includes(genre.id))
    return (
        <ScrollView style={styles.Container}>
           {/* <View style={styles.NameofSelectedItem}>
                <Text style={styles.TextName}>{TvSeriesDetails.name}</Text>
            </View>*/
    }
            <View style={styles.Details}>
                <Image source={{uri:posterPathNew}} style={{width:'100%',height:500}}></Image>
                <Title TextIen="ID: " title ={TvSeriesDetails.id}/>
                <Title TextIen="Backdrop_Path: "title={TvSeriesDetails.backdrop_path}/>
                <Title TextIen="First_Air_Date: " title={ TvSeriesDetails.first_air_date}/>
                <Title TextIen="Genres_Ids: "title ={matchingGenres?.map((genre)=>genre.name)?.toString()}/>
                <Title TextIen="Orgin_Contry: "title={TvSeriesDetails.origin_country} />
                <Title TextIen="Origin_Language: "title={TvSeriesDetails.original_language}/>
                <Title TextIen="Original_Name: "title={TvSeriesDetails.original_name}/>
                <Title TextIen="OverView: "title={TvSeriesDetails.overview}/>
                <Title TextIen="Popularity: "title={TvSeriesDetails.popularity}/>
                <Title TextIen="Vote_Average: "title={TvSeriesDetails.vote_average}/>
                <Title TextIen="Vote_Count"title={TvSeriesDetails.vote_count}/>
            </View>  
        </ScrollView>
    );
}
export default DetailsTVScreen;

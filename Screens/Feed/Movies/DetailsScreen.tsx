import {Text,View,ScrollView,StyleSheet} from "react-native";
import { MoviesProps } from "../../../Models/Movies";

import Title from "../../../Components/Title";
function DetailsMoviesScreen({route}){
      
    const MovieDetails:MoviesProps =route.params.MoviesDetails;
   /* navigation.setOption({
        headerTitle:MovieDetails.title
    })*/
    return (
        <ScrollView style={styles.Container}>
            <View style={styles.NameofSelectedItem}>
                <Text style={styles.TextName}>{MovieDetails.title}</Text>
            </View>
            <View style={styles.Details}>
                
                <Title TextIen="ID: " title ={MovieDetails.id}/>
                <Title TextIen="Adult: "title={MovieDetails.adult.valueOf()?"True":"False"} />
                <Title TextIen="Backdrop_Path: "title={MovieDetails.backdrop_path}/>
                <Title TextIen="Genres_Ids: "title ={MovieDetails.genre_ids.toString()}/>
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
const styles=StyleSheet.create({
    Container:{
        flex:1,
        borderWidth:2,
        margin:5,
        backgroundColor:'pink',

    },
    NameofSelectedItem:{
        alignItems:'center',
        justifyContent:'center',
    },
    TextName:{
        fontSize:20,
        fontWeight:'bold',
    },
    Details:{
        justifyContent:'space-around',
        margin:5,
        
    }
})
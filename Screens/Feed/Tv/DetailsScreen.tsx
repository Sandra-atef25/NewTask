import {Text,View,ScrollView,StyleSheet} from "react-native";
import { TvProps } from "../../../Models/Tv";
import Title from "../../../Components/Title";
function DetailsTVScreen({navigation,route}){
    const TvSeriesDetails:TvProps=route.params.SeriesDetails;
    return (
        <ScrollView style={styles.Container}>
            <View style={styles.NameofSelectedItem}>
                <Text style={styles.TextName}>{TvSeriesDetails.name}</Text>
            </View>
            <View style={styles.Details}>
                
                <Title TextIen="ID: " title ={TvSeriesDetails.id}/>
                <Title TextIen="Backdrop_Path: "title={TvSeriesDetails.backdrop_path}/>
                <Title TextIen="First_Air_Date: " title={ TvSeriesDetails.first_air_date}/>
                <Title TextIen="Genres_Ids: "title ={TvSeriesDetails.genre_ids.toString()}/>
                <Title TextIen="Orgin_Contry: "title={TvSeriesDetails.origin_country} />
                <Title TextIen="Origin_Language: "title={TvSeriesDetails.original_language}/>
                <Title TextIen="Original_Name: "title={TvSeriesDetails.original_name}/>
                <Title TextIen="OverView: "title={TvSeriesDetails.overview}/>
                <Title TextIen="Popularity: "title={TvSeriesDetails.popularity}/>
                <Title TextIen="Poster_Path: "title={TvSeriesDetails.poster_path}/>
                <Title TextIen="Vote_Average: "title={TvSeriesDetails.vote_average}/>
                <Title TextIen="Vote_Count"title={TvSeriesDetails.vote_count}/>
            </View>  
        </ScrollView>
    );
}
export default DetailsTVScreen;
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
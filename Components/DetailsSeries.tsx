import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../UIStyling/MoviesAndTVStyling/MoviesAndTvDetailsScreen';
import Title from './Title';
import IconButton from './StarIconButton';

const DetailsScreen = ({ posterPath, pressHandle, seriesIsFavorite, heartButtonPressHandler, TvSeries, matchingGenres }) => {
    return (
        <View style={styles.Container}>
            <View>
                <ImageBackground source={{ uri: posterPath }} style={{ width: '100%', height: 500 }}>
                    <View style={styles.headerButton}>
                        <View style={styles.viewHeader}>
                            <TouchableOpacity
                                onPress={pressHandle}
                            >
                                <Ionicons name="arrow-back" size={24} color='white' />

                            </TouchableOpacity>
                        </View>

                        <View style={styles.viewHeader}>

                            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Details</Text>
                        </View>
                        <View style={{marginLeft:20}}>
                            <IconButton
                                icon={seriesIsFavorite ? "heart" : "heart-outline"}
                                color={seriesIsFavorite ? 'red' : 'white'}
                                onPress={heartButtonPressHandler}
                            />
                        </View>

                    </View>
                </ImageBackground>
            </View>

            <ScrollView>
            <Title TextIen="ID: " title ={TvSeries.id}/>
                <Title TextIen="Backdrop_Path: "title={TvSeries.backdrop_path}/>
                <Title TextIen="First_Air_Date: " title={ TvSeries.first_air_date}/>
                <Title TextIen="Genres_Ids: "title ={matchingGenres?.map((genre)=>genre.name)?.toString()}/>
                <Title TextIen="Orgin_Contry: "title={TvSeries.origin_country} />
                <Title TextIen="Origin_Language: "title={TvSeries.original_language}/>
                <Title TextIen="Original_Name: "title={TvSeries.original_name}/>
                <Title TextIen="OverView: "title={TvSeries.overview}/>
                <Title TextIen="Popularity: "title={TvSeries.popularity}/>
                <Title TextIen="Vote_Average: "title={TvSeries.vote_average}/>
                <Title TextIen="Vote_Count"title={TvSeries.vote_count}/>
            </ScrollView>

        </View>


    );
}
export default DetailsScreen;
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../UIStyling/MoviesAndTVStyling/MoviesAndTvDetailsScreen';
import Title from './Title';
import IconButton from './StarIconButton';

const DetailsScreen = ({ posterPath, pressHandle, movieIsFavorite, heartButtonPressHandler, Movie, matchingGenres }) => {
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
                                icon={movieIsFavorite ? "heart" : "heart-outline"}
                                color={movieIsFavorite ? 'red' : 'white'}
                                onPress={heartButtonPressHandler}
                            />
                        </View>

                    </View>
                </ImageBackground>
            </View>

            <ScrollView>
                <Title TextIen="ID: " title={Movie.id} />
                <Title TextIen="Adult: " title={Movie.adult.valueOf() ? "True" : "False"} />
                <Title TextIen="Backdrop_Path: " title={Movie.backdrop_path} />
                <Title TextIen="Genres_Ids: " title={matchingGenres?.map((genre) => genre.name).toString()} />
                <Title TextIen="Origin_Language: " title={Movie.original_language} />
                <Title TextIen="Original_Title: " title={Movie.original_title} />
                <Title TextIen="OverView: " title={Movie.overview} />
                <Title TextIen="Popularity: " title={Movie.popularity} />
                <Title TextIen="Vote_Average: " title={Movie.vote_average} />
                <Title TextIen="Vote_Count: " title={Movie.vote_count} />
                <Title TextIen="Video: " title={Movie.video.valueOf() ? "True" : "False"} />
            </ScrollView>

        </View>


    );
}
export default DetailsScreen;
import {TouchableOpacity,View,Text,Image} from 'react-native';
import {MoviesProps} from '../Models/Movies';
import styles from '../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling';
type listOfMovies = {
    moviesL: MoviesProps;
    onPress: () => void;

};

export const MoviesList = ({ moviesL, onPress }: listOfMovies) => {

    const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";
    const posterPath: string = BASE_URL_IMAGE + moviesL?.poster_path?.toString();
    const title =moviesL.title.length>19? moviesL.title.slice(0,15)+'..':moviesL.title;
    return (

        <TouchableOpacity onPress={onPress} style={styles.ViewContainer}>
            <View style={styles.TextMoviesContainer}>
                <Image source={{ uri: posterPath }} style={styles.image} />
                <View style={styles.title}>
                    <Text style={styles.texttitle}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
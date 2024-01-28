import {View,Text,TouchableOpacity,Image} from 'react-native';
import {TvProps} from '../Models/Tv';
import styles from '../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling';
type listofTvseries = {
    tvList: TvProps;
    onPress: () => void;
};

const TVSeriesList = ({ tvList, onPress }: listofTvseries) => {
    const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";
    const posterPath: string = BASE_URL_IMAGE + tvList?.poster_path?.toString();
    const title =tvList.name.length>19? tvList.name.slice(0,15)+'..':tvList.name;
    
    return (

        <TouchableOpacity onPress={onPress} style={styles.ViewContainer}>
            <View style={styles.TextMoviesContainer}>
                <Image source={{ uri: posterPath }} style={styles.image} />
                <View style={styles.title}>
                    <Text style={styles.texttitle}>
                        {title}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>

    );

};
export default TVSeriesList;
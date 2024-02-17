import { ScrollView, View, Text } from 'react-native';
import { ItemData } from '../../../../models/Genres';
import { Colors } from '../../../../theme/colors/Colors';
import Title from '../../../atoms/Title';
import { styles } from './style';
import { tvDetailsProps } from './interface/interface';
const BodyDetailsSeries = ({ TvSeries, matchingGenres }:tvDetailsProps) => {
    return (
        <ScrollView>
            <Title title={TvSeries.name} color={Colors.white} fontWeight="bold" fontSize={20} />
            <Title title={TvSeries.id.toString()} color={Colors.white} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.backdrop_path} color={Colors.white} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.first_air_date} color={Colors.white} fontWeight="normal" fontSize={16} />
            <View style={styles.GenresContainer} >
                {matchingGenres?.map((genre: ItemData) => {
                    return (
                        <Text key={genre.id} style={styles.GenreName}><Text style={styles.GenreIndicator}>.</Text>{genre.name}</Text>
                    );
                })}
            </View>
            <Title title={TvSeries.origin_country.toString()} color={Colors.white} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.original_language} color={Colors.white} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.original_name} color={Colors.white} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.overview} color={Colors.white} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.popularity.toString()} color={Colors.white} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.vote_average.toString()} color={Colors.white} fontWeight="normal" fontSize={16} />
            <Title title={TvSeries.vote_count.toString()} color={Colors.white} fontWeight="normal" fontSize={16} />
        </ScrollView>
    );
};
export default BodyDetailsSeries;
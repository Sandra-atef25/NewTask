import { ScrollView, View, Text } from 'react-native';
import Title from '../../../atoms/Title';
import { ItemData } from '../../../../models/Genres';
import { styles } from './style';
import { Colors } from '../../../../theme/colors/Colors';
import { movieDetailsProps } from './interface/interface';
const BodyDetails = ({ Movie, matchingGenres }:movieDetailsProps) => {
    return (
        <ScrollView>
            <Title title={Movie?.title} color={Colors.white} fontSize={20} fontWeight="bold"/>
            <Title title={Movie?.id.toString()} color={Colors.white} fontSize={16} fontWeight="normal" />
            <Title title={Movie?.adult.valueOf() ? "Adult: True" : "Adult: False"} color={Colors.white} fontSize={16} fontWeight="normal"/>
            <Title title={Movie?.backdrop_path} color={Colors.white} fontSize={16} fontWeight="normal"/>
            <View style={styles.GenresContainer} >
                {matchingGenres?.map((genre: ItemData) => {
                    return (
                            <Text key={genre.id} style={styles.GenreName}><Text style={styles.GenreIndicator}>.</Text>{genre.name}</Text>
                        );
                })}
            </View>
            <Title title={Movie?.original_language} color={Colors.white} fontSize={16} fontWeight="normal"/>
            <Title title={Movie?.original_title} color={Colors.white} fontSize={16} fontWeight="normal" />
            <Title title={Movie?.overview} color={Colors.white} fontSize={16} fontWeight="normal"/>
            <Title title={Movie?.popularity.toString()} color={Colors.white} fontSize={16} fontWeight="normal" />
            <Title title={Movie?.vote_average.toString()} color={Colors.white} fontSize={16} fontWeight="normal" />
            <Title title={Movie?.vote_count.toString()} color={Colors.white} fontSize={16} fontWeight="normal" />
            <Title title={Movie?.video.valueOf() ? "Video: True" : "Video: False"} color={Colors.white} fontSize={16} fontWeight="normal"/>
        </ScrollView>
    );
};
export default BodyDetails;

import { View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import CustomImageDetails from '../../../molecules/CustomImageDetailsSreen';
import BodyDetailsSeries from '../../../molecules/series/BodyDetails';
import { seriesDetailsProps } from './interface/interface';
const DetailsSeries= ({ posterPath, seriesIsFavorite, heartButtonPressHandler, TvSeries, matchingGenres }:seriesDetailsProps) => {
    const navigation =useNavigation();
    const pressHandle =()=>{
        navigation.goBack();
    }
    return (
        <View style={styles.Container}>
            <CustomImageDetails dataIsFavorite={seriesIsFavorite} heartButtonPressHandler={heartButtonPressHandler} posterPath={posterPath} pressHandle={pressHandle}/>
            <BodyDetailsSeries TvSeries={TvSeries} matchingGenres={matchingGenres}/>
        </View>
    );
}
export default DetailsSeries;
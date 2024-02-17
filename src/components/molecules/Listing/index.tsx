import { FlatList, View } from 'react-native';
import { styles } from './style';
import Title from '../../atoms/Title';
import LoadingOverlay from '../../atoms/LoadingOverlay';
import { Colors } from '../../../theme/colors/Colors';
import { listingDataProps } from './interface/interface';
const Listing = ({ noMatchingData, fetchedData, renderData, handleEndReached, isFetchingData, title }:listingDataProps) => {

    return (
        <View style={styles.DataContainer}>
            {
                !noMatchingData &&
                <FlatList<any> data={fetchedData} renderItem={renderData} keyExtractor={(item) => item.id} numColumns={2}
                    onEndReached={handleEndReached} ListFooterComponent={
                        isFetchingData?<LoadingOverlay/>:null
                    }></FlatList>
            }
            {
                noMatchingData &&
                <Title color={Colors.red} fontSize={30} title={title} fontWeight="normal"/>

            }
        </View>

    );

}
export default Listing;

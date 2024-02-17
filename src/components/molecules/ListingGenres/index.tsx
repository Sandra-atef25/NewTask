import { View,FlatList} from "react-native";
import { listGenresProp } from "./interface/interface";
import { styles } from "./style";
const ListingGenres = ({ Genres, renderItem }: listGenresProp) => {
    return (
        <View style={styles.ItemContainer}>
        <FlatList<any> data={Genres} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} style={styles.ItemsContainers}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false} >
        </FlatList>
      </View>
    );
};
export default ListingGenres;
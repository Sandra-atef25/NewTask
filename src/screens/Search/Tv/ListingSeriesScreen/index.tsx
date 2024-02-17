import { View } from "react-native";
import { useHandleSearch } from "./hooks/HandleSearch";
import Listingseries from "./partials/ListOfSeriesData";
import SearchTextBar from "./partials/SearchBar";
import { styles } from "./style";

const ListingTVScreen = () => {
    const { fetchedSeries, handleClearSearch, handleEndReached, handleSearch, isFetchingSeries, noMatchingSeries, searchText } = useHandleSearch();

    return (
        <View style={styles.Container}>
            <SearchTextBar handleClearSearch={handleClearSearch} handleSearch={handleSearch} searchText={searchText} />
            <Listingseries fetchedSeries={fetchedSeries} handleEndReached={handleEndReached} isFetchingSeries={isFetchingSeries} noMatchingSeries={noMatchingSeries} />
        </View>
    );
};
export default ListingTVScreen;
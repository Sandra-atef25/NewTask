import { View } from "react-native";
import ListOfSeriesData from "./partials/ListOfSeriesCard";
import ListOfGenres from "./partials/ListOfGenres";
import ClearFilter from "./partials/ClearFilter";
import { useFetchingSeriesData } from "./hooks/HandleFetchingSeriesData";
import { styles } from "./style";
const ListingSeriesScreen = () => {
    const { fetchedSeries, genreFilter, handleClearFilter, handleEndReached, handleGenreFilter, isFetchingSeries, noMatchingSeries, setGenreFilter } = useFetchingSeriesData();
    return (
        <View style={styles.Container}>
            <ClearFilter handleClearFilter={handleClearFilter} />
            <ListOfGenres genreFilter={genreFilter} handleGenreFilter={handleGenreFilter} setGenreFilter={setGenreFilter} />
            <ListOfSeriesData fetchedSeries={fetchedSeries} handleEndReached={handleEndReached} isFetchingSeries={isFetchingSeries} noMatchingSeries={noMatchingSeries} />
        </View>
    );
};
export default ListingSeriesScreen;

import { View } from "react-native";
import { useHandleSearch } from "./hooks/HandleSearch";
import ListingMovies from "./partials/ListOfMoviesData";
import SearchTextBar from "./partials/SearchBar";
import { styles } from "./style";

const ListingMoviesScreen = () => {
    const {fetchedMovies,handleClearSearch,handleEndReached, handleSearch,isFetchingMovies,noMatchingMovie,searchText}=useHandleSearch();

    return (
        <View style={styles.Container}>
            <SearchTextBar handleClearSearch={handleClearSearch} handleSearch={handleSearch} searchText={searchText}/> 
            <ListingMovies fetchedMovies={fetchedMovies} handleEndReached={handleEndReached} isFetchingMovies={isFetchingMovies} noMatchingMovie={noMatchingMovie} />
        </View>
    );
};
export default ListingMoviesScreen;





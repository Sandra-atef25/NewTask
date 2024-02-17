import { View } from "react-native";
import ListOfMoviesData from "./partials/ListOfMoviesCard";
import ListOfGenres from "./partials/ListOfGenres";
import ClearFilter from "./partials/ClearFilter";
import { useFetchingMovies } from "./hooks/HandleFetchingMoviesData";
import { styles } from "./style";
const ListingMoviesScreen = () => {
    const{fetchedMovies,genreFilter,handleClearFilter,handleEndReached,handleGenreFilter,isFetchingMovies,noMatchingMovie,setGenreFilter}=useFetchingMovies();
    return (
        <View style={styles.Container}>
            <ClearFilter  handleClearFilter={handleClearFilter}/>
            <ListOfGenres genreFilter={genreFilter} handleGenreFilter={handleGenreFilter} setGenreFilter={setGenreFilter}/>
            <ListOfMoviesData fetchedMovies={fetchedMovies} handleEndReached={handleEndReached} isFetchingMovies={isFetchingMovies}  noMatchingMovie={noMatchingMovie} />
        </View>
    );
};
export default ListingMoviesScreen;

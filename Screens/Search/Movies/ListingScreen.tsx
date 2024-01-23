import { Text, View, FlatList, TouchableOpacity, TextInput, Button, Image } from "react-native";
import styles from "../../../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ItemData, MoviesProps } from '../../../Models/Movies';
import { fetchMoviesGenres, fetchMoviesList, fetchMoviesListFiltering, searchMovies } from "../../../util/http";
import LoadingOverlay from "../../../UIStyling/MoviesAndTVStyling/LoadingOverlay";
import Gradient from '../../../Components/Gradient';

type listOfMovies = {
    moviesL: MoviesProps;
    onPress: () => void;

};
const MoviesList = ({ moviesL, onPress }: listOfMovies) => {

    const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";
    const posterPath: string = BASE_URL_IMAGE + moviesL?.poster_path?.toString();
    const title =moviesL.title.length>19? moviesL.title.slice(0,15)+'..':moviesL.title;
    
    return (
            <TouchableOpacity onPress={onPress} style={styles.ViewContainer}>

                <View style={styles.TextMoviesContainer}>
                    <Image source={{ uri: posterPath }} style={styles.image} />
                
           
            <View style={styles.title}>

                <Text style={styles.texttitle}>{title}</Text>
            </View>
            </View>
       </TouchableOpacity>
    );
}
const ListingMoviesScreen = ({ navigation }) => {
    //const [selectedId, setSelectedId] = useState<number[]>([]);
    //const [selectedMovies, setSelectedMovies] = useState<MoviesProps[]>([]);

    const [searchText, setSearchText] = useState<string>("");
    const [clicked, setClicked] = useState<boolean>(false);
    const [searched, setSearched] = useState(false);
    //const [fetchedMoviesGenres, setMoviesGenres] = useState<ItemData[]>([]);
    const [fetchedMovies, setFetchedMovies] = useState<MoviesProps[]>([]);

    const [isFetchingMovies, setIsFetchingMovies] = useState(true);
    const [noMatchingMovie, setNoMatchingMovie] = useState(false);
    //for pagination
    const [page, setPageNumber] = useState(1);
    const [isEnded, setIsEnded] = useState(false);
    //filtering 
    //const [genreFilter, setGenreFilter] = useState<Number[]>([]);

    //http request for getting movies list //
    async function getMoviesList() {
        setIsFetchingMovies(true);
        const moviesList = await fetchMoviesList(page);
        //console.log(moviesList);

        if (moviesList.length == 0) {
            setIsEnded(true);
        }
        else {
            const filtered = moviesList.filter((neitem: MoviesProps) => !fetchedMovies.some((item: MoviesProps) => item.id === neitem.id));

            setFetchedMovies((prevList) => {
                return [...prevList, ...filtered];
            })
        }
        setIsFetchingMovies(false);
    }

    ///http request for searching//////

    async function getSearchMoviesList() {
        setIsFetchingMovies(true);
        const searchMoviesList = await searchMovies(page, searchText?.trim()?.toString());
        console.log(searchText);
        if (searchMoviesList?.length == 0) {
            setIsFetchingMovies(false);
            setNoMatchingMovie(true);
            setIsEnded(true);
        }
        else {
            const filtered = searchMoviesList.filter((neitem: MoviesProps) => !fetchedMovies.some((item: MoviesProps) => item.id === neitem.id));
            console.log(searchMoviesList);
            setFetchedMovies((prevList) => {
                return [...prevList, ...filtered];
            })
            setIsFetchingMovies(false);
            setNoMatchingMovie(false);
        }


    }
    //it is rendered anyway and once anything of dependency list gets updated so it is rendered again
    useEffect(() => {
        //in case of searching

        if (searched) {
            if (searchText?.trim()?.length === 0) {
                getMoviesList();
            }
            else {

                setFetchedMovies([]);
                getSearchMoviesList();

            }

        }

        //in case of nothing
        else {
            getMoviesList();
        }
    }, [page, searchText]);

    ////handling functions

    const handleSearch = () => {
        setPageNumber(1);
        setSearched(true);
    }

    const handleClearSearch = () => {
        //reset searchQuery and page number clearing search
        setClicked(false);
        setSearchText('');
        setPageNumber(1);
        setSearched(false);

    }

    const handleEndReached = () => {
        setIsEnded(true);
        if (!isFetchingMovies) {
            setPageNumber(page + 1);
        }


    }
    const renderMovies = ({ item: movie }: { item: MoviesProps }) => {
        const pressHandle = () => {
            navigation.navigate("TheMovieSelected", { MoviesDetails: movie });
        };

        return (
            <MoviesList moviesL={movie}
                onPress={pressHandle}
            />
        );
    };


    return (
        <View style={styles.container}>
            
                    <View style={styles.clearGenre}>
                        <Button title="Search" onPress={handleSearch} color='red' />

                    </View>


                    {
                        searched &&
                        <View style={clicked ? styles.textClicked : styles.textUnclicked}>
                            <Ionicons name='search' size={20} color='navy' style={styles.icon}></Ionicons>

                            <TextInput value={searchText} onChangeText={setSearchText} style={styles.textin} placeholder='Search'
                                onFocus={() => setClicked(true)} onBlur={() => setClicked(false)} />

                            {
                                clicked &&
                                <View>


                                    <Button title="Clear Search" onPress={handleClearSearch} />

                                </View>
                            }
                        </View>
                    }
                    <View style={styles.moviesContainer}>
                        {
                            !isEnded && isFetchingMovies && !noMatchingMovie && <LoadingOverlay />
                        }
                        {
                            !isFetchingMovies && !noMatchingMovie &&

                            <FlatList<any> data={fetchedMovies} renderItem={renderMovies} keyExtractor={(item) => item.id} numColumns={2}
                                onEndReached={handleEndReached} ListFooterComponent={
                                    isFetchingMovies && isEnded ? <LoadingOverlay /> : null
                                } ></FlatList>

                        }
                        {
                            !isFetchingMovies && noMatchingMovie &&
                            <View>
                                <Text style={styles.noMatchingMoviesText}> No Matching Movies</Text>
                            </View>
                        }
                    </View>
              

        </View>
    );
};
export default ListingMoviesScreen;





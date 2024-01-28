import { Text, View, FlatList, TouchableOpacity, TextInput, Button, Image } from "react-native";
import styles from "../../../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ItemData, MoviesProps } from '../../../Models/Movies';
import { fetchMoviesGenres, fetchMoviesList, fetchMoviesListFiltering, searchMovies } from "../../../util/http";
import LoadingOverlay from "../../../UIStyling/MoviesAndTVStyling/LoadingOverlay";
import Debounce from "../../../util/Debounce";
import { MoviesList } from "../../../Components/Movies";
import Listing from "../../../Components/Listing";
const ListingMoviesScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState<string>("");
    const [clicked, setClicked] = useState<boolean>(false);
    const [searched, setSearched] = useState(false);
    const [fetchedMovies, setFetchedMovies] = useState<MoviesProps[]>([]);

    const [isFetchingMovies, setIsFetchingMovies] = useState(true);
    const [noMatchingMovie, setNoMatchingMovie] = useState(false);
    //for pagination
    const [page, setPageNumber] = useState(1);
    const [isEnded, setIsEnded] = useState(false);
    //http request for getting movies list //
      //http request for getting movies list //
      async function getMoviesList() {
        setIsFetchingMovies(true);
        const moviesList = await fetchMoviesList(page);

        const filtered = moviesList.filter((neitem: MoviesProps) => !fetchedMovies.some((item: MoviesProps) => item.id === neitem.id));

        setFetchedMovies((prevList) => {
            return [...prevList, ...filtered];
        })

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
        <Listing fetchedData={fetchedMovies} handleEndReached={handleEndReached} isFetching={isFetchingMovies} noMatchingData={noMatchingMovie} renderData={renderMovies} title="NO Matching Movies" >

            <View style={styles.clearGenre}>
                <Button title="Search" onPress={handleSearch} color='red' />

            </View>
            {
                searched &&
                <View style={clicked ? styles.textClicked : styles.textUnclicked}>
                    <Ionicons name='search' size={20} color='navy' style={styles.icon}></Ionicons>

                    <TextInput  value={searchText} onChangeText={Debounce((text)=>setSearchText(text),3000,true)} style={styles.textin} placeholder='Search'
                        onFocus={() => setClicked(true)} onBlur={() => setClicked(false)}  />

                    {
                        clicked &&
                        <View>
                            <Button title="Clear Search" onPress={handleClearSearch} />
                        </View>
                    }
                </View>
            }
           
        </Listing>
    );
};
export default ListingMoviesScreen;




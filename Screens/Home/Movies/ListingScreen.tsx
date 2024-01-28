import {  View, FlatList, Button } from "react-native";
import styles from "../../../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling";
import { useEffect, useState } from "react";
import { ItemData, MoviesProps } from '../../../Models/Movies';
import { fetchMoviesGenres, fetchMoviesList, fetchMoviesListFiltering } from "../../../util/http";
import { Item } from '../../../Components/Genres';
import { MoviesList } from "../../../Components/Movies";
import Listing from "../../../Components/Listing";

const ListingMoviesScreen = ({ navigation }) => {
    const [fetchedMoviesGenres, setMoviesGenres] = useState<ItemData[]>([]);
    const [fetchedMovies, setFetchedMovies] = useState<MoviesProps[]>([]);

    const [isFetchingMovies, setIsFetchingMovies] = useState(true);
    const [noMatchingMovie, setNoMatchingMovie] = useState(false);
    //for pagination
    const [page, setPageNumber] = useState(1);
    //filtering 
    const [genreFilter, setGenreFilter] = useState<Number[]>([]);
    //http requests for getting movies Genres////////
    async function getMoviesGenresList() {
        const moviesGenresList = await fetchMoviesGenres();
        setMoviesGenres(moviesGenresList);

    }
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
    //http request for new movies list by filtering//
    async function getMoviesListFiltering() {
        setIsFetchingMovies(true);
        const moviesListFiltered = await fetchMoviesListFiltering(page, genreFilter.join(","));
        //console.log(moviesListFiltered);
        if (moviesListFiltered?.length == 0) {
            setIsFetchingMovies(false);
            setNoMatchingMovie(true);

        }

        else {
            const filtered = moviesListFiltered.filter((neitem: MoviesProps) => !fetchedMovies.some((item: MoviesProps) => item.id === neitem.id));
            setFetchedMovies((prevList) => {
                return [...prevList, ...filtered];
            })
            setIsFetchingMovies(false);
            setNoMatchingMovie(false);
        }

    }
    useEffect(() => {
        getMoviesGenresList();
    }, []);
    //it is rendered anyway and once anything of dependency list gets updated so it is rendered again
    useEffect(() => {

        //in case of filtering
        if (genreFilter.length != 0) {
            getMoviesListFiltering();
        }
        //in case of nothing
        else {
            getMoviesList();
        }
    }, [page, genreFilter]);

    ////handling functions
    const handleGenreFilter = () => {
        // reset  page number 
        setFetchedMovies([]);
        setPageNumber(1);

    }
    const handleClearFilter = () => {
        //reset genrefilter and page number
        setNoMatchingMovie(false);
        setGenreFilter([]);
        setPageNumber(1);
    }
    const handleEndReached = () => {
        if (!isFetchingMovies) {
            setPageNumber(page + 1);
        }

    }

    const renderItem = ({ item }: { item: ItemData }) => {
        const backgroundColor = genreFilter.includes(item.id) ? 'black' : 'gray';
        const color = genreFilter.includes(item.id) ? 'white' : 'black';
        const pressHandle = (item: ItemData) => {
            //prevList
            // if prevList includes item.id -> remove item.id
            // else add item.id

            handleGenreFilter();

            setGenreFilter((prevList) => {
                return prevList.includes(item.id) ? prevList.filter((id) => id !== item.id) : [...prevList, item.id]
            }
            );

        };

        return (
            <Item
                item={item}
                onPress={pressHandle.bind(this, item)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };
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
        <Listing fetchedData={fetchedMovies} handleEndReached={handleEndReached} isFetching={isFetchingMovies} noMatchingData={noMatchingMovie} renderData={renderMovies} title="No Matching Movie" >
            <View style={styles.clearGenre}>

                <Button title="Clear Filter" onPress={handleClearFilter} color='red' />
            </View>


            <View style={styles.ItemContainer}>
                <FlatList<any> data={fetchedMoviesGenres} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} style={styles.ItemsContainers}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false} >
                </FlatList>
            </View>

        </Listing>
        );
};
export default ListingMoviesScreen;
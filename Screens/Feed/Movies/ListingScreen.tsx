import { Text, View, FlatList, TouchableOpacity, TextInput,  Button } from "react-native";
import styles from "../../../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ItemData, MoviesProps } from '../../../Models/Movies';
import { fetchMoviesGenres, fetchMoviesList, fetchMoviesListFiltering, searchMovies } from "../../../util/http";
import LoadingOverlay from "../../../UIStyling/MoviesAndTVStyling/LoadingOverlay";

type listOfMovies = {
    moviesL: MoviesProps;
    onPress: () => void;
};
type itemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: itemProps) => (
    <TouchableOpacity onPress={onPress} style={[{ backgroundColor, borderWidth: 1, borderRadius: 5, margin: 5 }, styles.ViewContainer]}>
        <View style={styles.TextContainer}>
            <Text style={[styles.Itemtext, { color: textColor }]}>ID: {item.id}</Text>
            <Text style={[{ color: textColor }, styles.Itemtext]}>Name: {item.name}</Text>
        </View>
    </TouchableOpacity>
);
const MoviesList = ({ moviesL, onPress }: listOfMovies) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.ViewContainer}>
            <View style={styles.TextMoviesContainer}>
                <Text style={styles.Itemtext}>
                    Title Of Movie:{"\n"}
                    <Text style={[styles.Itemtext, { color: 'red' }]}>
                        {moviesL.title}
                    </Text>
                   
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const ListingMoviesScreen = ({ navigation }) => {
    //const [selectedId, setSelectedId] = useState<number[]>([]);
    //const [selectedMovies, setSelectedMovies] = useState<MoviesProps[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [clicked, setClicked] = useState<boolean>(false);

    const [fetchedMoviesGenres, setMoviesGenres] = useState<ItemData[]>([]);
    const [fetchedMovies, setFetchedMovies] = useState<MoviesProps[]>([]);

    const [isFetchingMovies, setIsFetchingMovies] = useState(true);
    const [isFetchingGenres, setIsFetchingGenres] = useState(true);
    const [searched,setSearch]=useState(false);
    //for pagination
    const [page, setPageNumber] = useState(1);
    //filtering 
    const [genreFilter, setGenreFilter] = useState<Number[]>([]);
   
    const renderItem = ({ item }: { item: ItemData }) => {
        const backgroundColor = genreFilter.includes(item.id) ? 'darkblue' : 'lightblue';
        const color = genreFilter.includes(item.id) ? 'white' : 'black';

        const pressHandle = (item: ItemData) => {
            //prevList
            // if prevList includes item.id -> remove item.id
            // else add item.id
            /*setSelectedId((prevList) => {
                return prevList.includes(item.id) ? prevList.filter((id) => id !== item.id) : [...prevList, item.id]
            });
            */
            setGenreFilter((prevList) => {
                return prevList.includes(item.id) ? prevList.filter((id) => id !== item.id) : [...prevList, item.id]
            }
            );
            console.log(genreFilter);
            handleGenreFilter();
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
    /*
    useEffect(() => {
        console.log(selectedId);
        if (selectedId.length == 0) {
            if (searchText.trim().length == 0) {
                setSelectedMovies(fetchedMovies);
            }
            else {
                const searchMovies = fetchedMovies.filter((item) => item.title.toLowerCase().startsWith(searchText.trim().toLowerCase()));
                setSelectedMovies(searchMovies);
            }

        }

        else {
            //check if more than an id is selected so
            // return all movies including in his genres ids thoses selected id 
            const matchingMovies = fetchedMovies.filter((movie) =>
                selectedId.every((genreID) => movie.genre_ids.includes(genreID)));
            if (searchText.trim().length === 0) {

                setSelectedMovies(matchingMovies);
            }
            else {
                const searchMovies = matchingMovies.filter((item) => item.title.toLowerCase().startsWith(searchText.trim().toLowerCase()));
                if (searchMovies.length == 0) {
                    setSelectedMovies(matchingMovies);
                }
                else {
                    setSelectedMovies(searchMovies);
                }
            }
            console.log(matchingMovies);
        }
        /*
                setSelectedMovies(movies.filter((item) => selectedId.some((id) => item.genre_ids.includes(id))));
                if (searchText.trim() !== "" && selectedId.length !== 0) {
                    
                    const checkmovies = nextmovies.filter((item) => selectedMovies.filter((mo) => (mo.id !== item.id)));
                    setSelectedMovies(selectedMovies.concat(checkmovies));
                }
                else if (searchText.trim() !== "" && selectedId.length == 0) {
                    const nextmovies = movies.filter((item) => item.title.toLowerCase().startsWith(searchText.toLowerCase()));
                    setSelectedMovies(nextmovies);
                }
        
    }, [selectedId, searchText]);

    */
    //http requests for getting movies Genres////////
    useEffect(() => {
        async function getMoviesGenresList() {
            const moviesGenresList = await fetchMoviesGenres();
            setIsFetchingGenres(true);

            setMoviesGenres(moviesGenresList);
            setIsFetchingGenres(false);
        }
        getMoviesGenresList();
    }, []);
    //http request for getting movies list //
    async function getMoviesList() {
        setIsFetchingMovies(true);
        const moviesList = await fetchMoviesList(page);
        console.log(moviesList);
        setFetchedMovies(moviesList);
        setIsFetchingMovies(false);
    }
    useEffect(() => {
        getMoviesList();
    }, [page]);
    //http request for new movies list by filtering//
    async function getMoviesListFiltering() {
        setIsFetchingMovies(true);
        const moviesListFiltered = await fetchMoviesListFiltering(page, genreFilter.join(","));
        console.log(moviesListFiltered);
        setFetchedMovies(moviesListFiltered);
        setIsFetchingMovies(false);
    }
    useEffect(() => {
        getMoviesListFiltering();
    }, [page, genreFilter]);
    ///http request for searching//////
    
    async function getSearchMoviesList() {
        setIsFetchingMovies(true);
        const searchMoviesList = await searchMovies(page, searchText.toString());
        console.log(searchMoviesList);  
        setFetchedMovies(searchMoviesList);
        setIsFetchingMovies(false);
        
        
       
    }
    useEffect(() => {
        getSearchMoviesList();
    }, [page,searchText]);
    
    ////handling functions

    const handleSearch = () => {
        setSearchText(searchText);
        setGenreFilter(null);
        setPageNumber(1);
        if(searchText.trim().length==0){
            getMoviesList();
        }
        else {
            getSearchMoviesList();
        }
    }

    const handleClearSearch = () => {
        setSearchText('');
        setPageNumber(1);
        setSearch(false);
        setClicked(false);
        getMoviesList();
    }
    const handleGenreFilter = () => {
        // reset searchQuery and page number
        setSearchText('');
        setPageNumber(1);
        getMoviesListFiltering();
    }
    const handleClearFilter=()=>{
        setGenreFilter([]);
        setPageNumber(1);
        getMoviesList();
    }
    const handleEndReached = () => {
        setPageNumber(page + 1);

    }

    if (isFetchingMovies) {
        return <LoadingOverlay />;
    }


    return (
        <View style={styles.container}>
            <View style={clicked?styles.textClicked:styles.textUnclicked}>
                <Ionicons name='search' size={20} color='navy' style={styles.icon}></Ionicons>
                <TextInput value={searchText} style={styles.textin}
                    onFocus={() => { setClicked(true); }} onBlur={() => { setClicked(false) }} />
                <View>
                    {
                        clicked &&
                        <View>
                            <Button title="Search" onPress={handleSearch} />
                            <Button title="Clear Search" onPress={handleClearSearch} />
                
                            </View>
                    }
                
                </View>
                {
                    genreFilter &&
                    (<View>
                        
                        <Button title="Clear Filter" onPress={handleClearFilter} />
                    </View>)
                }

                {/*
                    clicked && (
                        <View >
                            <Button
                                title="Cancel"
                                onPress={() => {
                                    Keyboard.dismiss();
                                    setClicked(false);
                                }}

                            ></Button>
                        </View>
                    )
                            */}
            </View>
            <View style={styles.ItemContainer}>
                <FlatList<any> data={fetchedMoviesGenres} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} style={styles.ItemsContainers}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false} >
                </FlatList>
            </View>
            <View style={styles.moviesContainer}>
                <FlatList<any> data={fetchedMovies} renderItem={renderMovies} keyExtractor={(item) => item.id} numColumns={2}
                    onEndReached={handleEndReached} onEndReachedThreshold={0.1}></FlatList>
            </View>
        </View>
    );
};
export default ListingMoviesScreen;



import { Text, View, FlatList, TouchableOpacity, TextInput, Button } from "react-native";
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
    const [searched, setSearched] = useState(false);
    const [fetchedMoviesGenres, setMoviesGenres] = useState<ItemData[]>([]);
    const [fetchedMovies, setFetchedMovies] = useState<MoviesProps[]>([]);

    const [isFetchingMovies, setIsFetchingMovies] = useState(true);
    const [noMatchingMovie,setNoMatchingMovie]=useState(false);
    //for pagination
    const [page, setPageNumber] = useState(1);
    const [pagination,setPagination]=useState<Number[]>([page]);
    const [isEnded,setIsEnded]=useState(false);
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
    //http requests for getting movies Genres////////
    useEffect(() => {
        async function getMoviesGenresList() {
            const moviesGenresList = await fetchMoviesGenres();
            setMoviesGenres(moviesGenresList);

        }
        getMoviesGenresList();
    }, []);
    //http request for getting movies list //
    async function getMoviesList() {
        setIsFetchingMovies(true);
        const moviesList = await fetchMoviesList(page);
        console.log(moviesList);
        
        if(moviesList.length==0)
        {
            setIsEnded(false);
        }
        else{
            const filtered= moviesList.filter((neitem:MoviesProps)=>!fetchedMovies.some((item:MoviesProps)=>item.id===neitem.id));
               
            setFetchedMovies((prevList)=>
            {
               return[...prevList,...filtered];
            })
        }
        setIsFetchingMovies(false);
    }

    //http request for new movies list by filtering//
    async function getMoviesListFiltering() {
        setIsFetchingMovies(true);
        console.log(genreFilter);
        const moviesListFiltered = await fetchMoviesListFiltering(page, genreFilter.join(","));
        //console.log(moviesListFiltered);
        if(moviesListFiltered.length==0)
        {
            setIsEnded(false);
        }
        else{
            const filtered= moviesListFiltered.filter((neitem:MoviesProps)=>!fetchedMovies.some((item:MoviesProps)=>item.id===neitem.id));
               
            setFetchedMovies((prevList)=>
            {
               return[...prevList,...filtered];
            })
        }
        setIsFetchingMovies(false);

    }

    ///http request for searching//////

    async function getSearchMoviesList() {
        setIsFetchingMovies(true);
        const searchMoviesList = await searchMovies(page, searchText.trim());
        console.log(searchMoviesList);
        if(searchMoviesList.length==0){
            setIsFetchingMovies(false);
            setNoMatchingMovie(true);
            setIsEnded(false);
        }
        else{
            const filtered= searchMoviesList.filter((neitem:MoviesProps)=>!fetchedMovies.some((item:MoviesProps)=>item.id===neitem.id));
               
            setFetchedMovies((prevList)=>
            {
               return[...prevList,...filtered];
            })
            setIsFetchingMovies(false);
            setNoMatchingMovie(false);
        }
        

    }
    //it is rendered anyway and once anything of dependency list gets updated so it is rendered again
    useEffect(()=>{
        //in case of searching
        
        if(searched){
            if(searchText.trim().length==0){
                getMoviesList();
            }
            else{
                getSearchMoviesList();
            }
            
        }
        //in case of filtering
        else if(genreFilter.length!=0){
            getMoviesListFiltering();
        }
        //in case of nothing
        else{
            getMoviesList();
        }
    },[page,searchText,genreFilter]);

    ////handling functions

    const handleSearch = () => {
        setGenreFilter([]);
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
    const handleGenreFilter = () => {
        // reset searchQuery and page number 
        setSearchText('');
        setPageNumber(1);
    }
    const handleClearFilter = () => {
        //reset genrefilter and page number
        setGenreFilter([]);
        setPageNumber(1);
    }
    const handleEndReached = () => {
        setIsEnded(true);
        if(!isFetchingMovies){
            setPageNumber(page+1);
        }
        

    }

    return (
        <View style={styles.container}>
            <Button title="Search" onPress={handleSearch} />

            {
                searched &&
                <View style={clicked ? styles.textClicked : styles.textUnclicked}>
                    <Ionicons name='search' size={20} color='navy' style={styles.icon}></Ionicons>

                    <TextInput value={searchText} onChangeText={setSearchText} style={styles.textin}
                        onFocus={() => setClicked(true)} onBlur={() => setClicked(false)} />

                    {
                        clicked &&
                        <View>

                            <Button title="Clear Search" onPress={handleClearSearch} />

                        </View>
                    }




                </View>
            }

            {
                !searched && genreFilter &&
                (<View>

                    <Button title="Clear Filter" onPress={handleClearFilter} />
                </View>)
            }
            {
                !searched &&
                <View style={styles.ItemContainer}>
                <FlatList<any> data={fetchedMoviesGenres} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} style={styles.ItemsContainers}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false} >
                </FlatList>
            </View>
            }
            <View style={styles.moviesContainer}>
            {
                !isEnded&&isFetchingMovies&&!noMatchingMovie&&<LoadingOverlay/>
            }
            {
                !isFetchingMovies&& !noMatchingMovie&& 
                
                <FlatList<any> data={fetchedMovies} renderItem={renderMovies} keyExtractor={(item) => item.id} numColumns={2}
                    onEndReached={handleEndReached} ListFooterComponent={
                        isFetchingMovies&&isEnded?<LoadingOverlay/>:null
                    } ></FlatList>

            
            }
            {
                !isFetchingMovies &&noMatchingMovie&&
                <View>
                    <Text> No Matching Movies</Text>
                </View>
            }
            </View>
           
            
        </View>
    );
};
export default ListingMoviesScreen;





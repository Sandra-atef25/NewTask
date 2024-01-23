import { Text, View, FlatList, TouchableOpacity, TextInput, Image, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { series } from "../../../Data/mocks";
import { seriesGenres } from "../../../Data/mocks";
import { ItemData, TvProps } from '../../../Models/Tv';
import styles from '../../../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling';
import { fetchTVGenres, fetchTVList, fetchTVListFiltering, searchTV } from "../../../util/http";
import LoadingOverlay from "../../../UIStyling/MoviesAndTVStyling/LoadingOverlay";
import Gradient from '../../../Components/Gradient';
type listofTvseries = {
    tvList: TvProps;
    onPress: () => void;
};
type itemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: itemProps) => (
    <View style={styles.outerContainerofGenres}>
        <TouchableOpacity onPress={onPress} style={[{ backgroundColor, borderWidth: 1, borderRadius: 20, margin: 5 }, styles.ViewContainer]}>
            <View style={styles.TextContainer}>
                {/*<Text style={[styles.Itemtext, { color: textColor }]}>ID: {item.id}</Text>*/}
                <Text style={[{ color: textColor }, styles.Itemtext]}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    </View>
);
const TVSeriesList = ({ tvList, onPress }: listofTvseries) => {
    const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";
    const posterPath: string = BASE_URL_IMAGE + tvList?.poster_path?.toString();
    const title =tvList.name.length>19? tvList.name.slice(0,15)+'..':tvList.name;
    
    return (

        <TouchableOpacity onPress={onPress} style={styles.ViewContainer}>
            <View style={styles.TextMoviesContainer}>
                <Image source={{ uri: posterPath }} style={styles.image} />

                <View style={styles.title}>
                    <Text style={styles.texttitle}>
                        {title}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>

    );

};
const ListingTVScreen = ({ navigation }) => {
    //setting Search tesxt to see the matching movies in search text
    //const [searchText, setSearchText] = useState<string>("");

    //clicked to appear clear search in textinput
    const [clicked, setClicked] = useState<boolean>(false);

    //searched to see the text is searched (button searched is clicked on so we use another api)or not 
    //const [searched, setSearched] = useState(false);

    //set and fetch the tv genres from the given Api
    const [fetchedTvGenres, setTvGenres] = useState<ItemData[]>([]);

    //set and fetch the series of tv from the given Api
    const [fetchedSeries, setFetchedSeries] = useState<TvProps[]>([]);

    //is fetching to handle loading overlay while fetching from the backend
    const [isFetchingSeries, setIsFetchingSeries] = useState(true);

    //to chcek if there is no matching series in the given searchtext
    const [noMatchingSeries, setNoMatchingSeries] = useState(false);

    //for pagination
    const [page, setPageNumber] = useState(1);
    const [isEnded, setIsEnded] = useState(false);

    //filtering 
    const [genreFilter, setGenreFilter] = useState<Number[]>([]);

    const renderItem = ({ item }: { item: ItemData }) => {
        const backgroundColor = genreFilter.includes(item.id) ? 'darkblue' : 'gray';
        const color = genreFilter.includes(item.id) ? 'white' : 'black';

        const pressHandle = (item: ItemData) => {
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
    const renderSeries = ({ item: tvSeries }: { item: TvProps }) => {
        const pressHandle = () => {
            navigation.navigate("SeriesDetails", { SeriesDetails: tvSeries });
        };
        return (
            <TVSeriesList tvList={tvSeries}
                onPress={pressHandle}
            />
        );
    };

    //http requests for getting Tv Genres////////
    useEffect(() => {
        async function getSeriesGenresList() {
            const seriesGenresList = await fetchTVGenres();
            setTvGenres(seriesGenresList);

        }
        getSeriesGenresList();
    }, []);
    //http request for getting series list //
    async function getSeriesList() {
        setIsFetchingSeries(true);
        const seriesList = await fetchTVList(page);
        console.log(seriesList);
        //if there is a no data in series list  so consider it the end of flat list
        if (seriesList.length == 0) {

            setIsEnded(true);
        }
        else {
            const filtered = seriesList.filter((newItem: TvProps) => !fetchedSeries.some((item: TvProps) => item.id === newItem.id));

            setFetchedSeries((prevList) => {
                return [...prevList, ...filtered];
            })
        }
        setIsFetchingSeries(false);
    }

    //http request for new Series list by filtering//
    async function getSeriesListFiltering() {
        setIsFetchingSeries(true);
        console.log(genreFilter);
        const seriesListFiltered = await fetchTVListFiltering(page, genreFilter.join(","));
        //console.log(moviesListFiltered);
        if (seriesListFiltered?.length == 0) {
            setIsEnded(true);
            setNoMatchingSeries(true);
            setIsFetchingSeries(false);
        }
        else {
            const filtered = seriesListFiltered.filter((newItem: TvProps) => !fetchedSeries.some((item: TvProps) => item.id === newItem.id));

            setFetchedSeries((prevList) => {
                return [...prevList, ...filtered];
            })
            setIsFetchingSeries(false);
            setNoMatchingSeries(false);
        }


    }

    ///http request for searching//////
    /*
    async function getSearchSeriesList() {
        setIsFetchingSeries(true);
        const searchSeriesList = await searchTV(page, searchText.trim());
        console.log(searchSeriesList);
        if (searchSeriesList.length == 0) {
            setIsFetchingSeries(false);
            setNoMatchingSeries(true);
            setIsEnded(true);
        }
        else {
            const filtered = searchSeriesList.filter((newItem: TvProps) => !fetchedSeries.some((item: TvProps) => item.id === newItem.id));

            setFetchedSeries((prevList) => {
                return [...prevList, ...filtered];
            })
            setIsFetchingSeries(false);
            setNoMatchingSeries(false);
        }


    }*/
    //it is rendered anyway and once anything of dependency list gets updated so it is rendered again
    useEffect(() => {
        //in case of searching

        /*if (searched) {
            if (searchText.trim().length == 0) {
                getSeriesList();
            }
            else {
                setFetchedSeries([]);
                getSearchSeriesList();
            }

        }*/
        //in case of filtering
        if (genreFilter.length != 0) {
            getSeriesListFiltering();
        }
        //in case of nothing
        else {
            getSeriesList();
        }
    }, [page, genreFilter]);

    ////handling functions

    /*const handleSearch = () => {
        //reset the genre filter and enable searched state and reset the page number
        
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

    }*/
    const handleGenreFilter = () => {
        // reset searchQuery and page number 

        //setSearchText('');
        setFetchedSeries([]);
        setPageNumber(1);
    }
    const handleClearFilter = () => {
        //reset genrefilter and page number
        setGenreFilter([]);
        setPageNumber(1);
        setNoMatchingSeries(false);
    }
    const handleEndReached = () => {
        setIsEnded(true);
        if (!isFetchingSeries) {
            setPageNumber(page + 1);
        }


    }

    return (
        <View style={styles.container}>

            {/*<Button title="Search" onPress={handleSearch} />

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
            }*/}

            {
                genreFilter &&
                (<View style={styles.clearGenre}>

                    <Button title="Clear Filter" onPress={handleClearFilter} color='red' />
                </View>)
            }

            <View style={styles.ItemContainer}>
                <FlatList<any> data={fetchedTvGenres} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} style={styles.ItemsContainers}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false} >
                </FlatList>
            </View>

            <View style={styles.moviesContainer}>
                {
                    !isEnded && isFetchingSeries && !noMatchingSeries && <LoadingOverlay />
                }
                {
                    !isFetchingSeries && !noMatchingSeries &&

                    <FlatList<any> data={fetchedSeries} renderItem={renderSeries} keyExtractor={(item) => item.id} numColumns={2}
                        onEndReached={handleEndReached} ListFooterComponent={
                            isFetchingSeries && isEnded ? <LoadingOverlay /> : null
                        } ></FlatList>


                }
                {
                    !isFetchingSeries && noMatchingSeries &&
                    <View>
                        <Text style={styles.noMatchingMoviesText}> No Matching TV Series</Text>
                    </View>
                }
            </View>


        </View>
    );
};
export default ListingTVScreen;

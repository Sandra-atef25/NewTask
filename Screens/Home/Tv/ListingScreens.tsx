import { Text, View, FlatList, Button, TVProps } from "react-native";
import { useEffect, useState } from "react";
import { ItemData, TvProps } from '../../../Models/Tv';
import styles from '../../../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling';
import { fetchTVGenres, fetchTVList, fetchTVListFiltering } from "../../../util/http";
import LoadingOverlay from "../../../UIStyling/MoviesAndTVStyling/LoadingOverlay";
import { Item } from "../../../Components/Genres";
import TVSeriesList from "../../../Components/TVSeries";
import Listing from "../../../Components/Listing";
const ListingTVScreen = ({ navigation }) => {
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
    //http requests for getting Tv Genres////////
    async function getSeriesGenresList() {
        const seriesGenresList = await fetchTVGenres();
        setTvGenres(seriesGenresList);

    }
    //http request for getting series list //
    async function getSeriesList() {
        setIsFetchingSeries(true);
        const seriesList = await fetchTVList(page);
        console.log(seriesList);


        const filtered = seriesList.filter((newItem: TvProps) => !fetchedSeries.some((item: TvProps) => item.id === newItem.id));

        setFetchedSeries((prevList) => {
            return [...prevList, ...filtered];
        })

        setIsFetchingSeries(false);
    }
    //http request for new seies list by filtering//
    async function getSeriesListFiltering() {
        setIsFetchingSeries(true);
        const moviesListFiltered = await fetchTVListFiltering(page, genreFilter.join(","));
        //console.log(moviesListFiltered);
        if (moviesListFiltered?.length === 0) {
            setIsFetchingSeries(false);
            setNoMatchingSeries(true);

        }

        else {
            const filtered = moviesListFiltered.filter((newItem: TvProps) => !fetchedSeries.some((item: TvProps) => item.id === newItem.id));
            setFetchedSeries((prevList) => {
                return [...prevList, ...filtered];
            })
            setIsFetchingSeries(false);
            setNoMatchingSeries(false);
        }

    }
    useEffect(() => {
        getSeriesGenresList();
    }, []);
    //it is rendered anyway and once anything of dependency list gets updated so it is rendered again
    useEffect(() => {

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
    const handleGenreFilter = () => {
        // reset  page number 
        setFetchedSeries([]);
        setPageNumber(1);

    }
    const handleClearFilter = () => {
        //reset genrefilter and page number
        setNoMatchingSeries(false);
        setGenreFilter([]);
        setPageNumber(1);
    }
    const handleEndReached = () => {
        if (!isFetchingSeries) {
            setPageNumber(page + 1);
        }

    }

    const renderItem = ({ item }: { item: ItemData }) => {
        const backgroundColor = genreFilter.includes(item.id) ? 'black' : 'gray';
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
    return (
        <Listing fetchedData={fetchedSeries} handleEndReached={handleEndReached} isFetching={isFetchingSeries} noMatchingData={noMatchingSeries} renderData={renderSeries} title="No Matching Series">

            <View style={styles.clearGenre}>

                <Button title="Clear Filter" onPress={handleClearFilter} color='red' />
            </View>
            <View style={styles.ItemContainer}>
                <FlatList<any> data={fetchedTvGenres} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} style={styles.ItemsContainers}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false} >
                </FlatList>
            </View>
        </Listing>

    );
};
export default ListingTVScreen;

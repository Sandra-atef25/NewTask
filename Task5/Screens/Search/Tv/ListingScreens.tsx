import { Text, View, FlatList, TouchableOpacity, TextInput, Image, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ItemData, TvProps } from '../../../Models/Tv';
import styles from '../../../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling';
import { fetchTVList, searchTV } from "../../../util/http";
import LoadingOverlay from "../../../UIStyling/MoviesAndTVStyling/LoadingOverlay";
import TVSeriesList from "../../../Components/TVSeries";
import Listing from "../../../Components/Listing";
import { nodeModuleNameResolver } from "typescript";

const ListingTVScreen = ({ navigation }) => {
    //setting Search tesxt to see the matching movies in search text
    const [searchText, setSearchText] = useState<string>("");

    //clicked to appear clear search in textinput
    const [clicked, setClicked] = useState<boolean>(false);

    //searched to see the text is searched (button searched is clicked on so we use another api)or not 
    const [searched, setSearched] = useState(false);

    //set and fetch the series of tv from the given Api
    const [fetchedSeries, setFetchedSeries] = useState<TvProps[]>([]);

    //is fetching to handle loading overlay while fetching from the backend
    const [isFetchingSeries, setIsFetchingSeries] = useState(true);

    //to chcek if there is no matching series in the given searchtext
    const [noMatchingSeries, setNoMatchingSeries] = useState(false);

    //for pagination
    const [page, setPageNumber] = useState(1);
    const [isEnded, setIsEnded] = useState(false);

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
    //http request for getting series list //
    async function getSeriesList() {
        setIsFetchingSeries(true);
        const seriesList = await fetchTVList(page);
        console.log(seriesList);
        //if there is a no data in series list  so consider it the end of flat list

        const filtered = seriesList.filter((newItem: TvProps) => !fetchedSeries.some((item: TvProps) => item.id === newItem.id));

        setFetchedSeries((prevList) => {
            return [...prevList, ...filtered];
        })

        setIsFetchingSeries(false);
    }

    ///http request for searching//////

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


    }
    //it is rendered anyway and once anything of dependency list gets updated so it is rendered again
    useEffect(() => {
        //in case of searching

        if (searched) {
            if (searchText.trim().length == 0) {
                getSeriesList();
            }
            else {
                setFetchedSeries([]);
                getSearchSeriesList();
            }

        }
        //in case of nothing
        else {
            getSeriesList();
        }
    }, [page, searchText]);

    ////handling functions

    const handleSearch = () => {
        //reset the genre filter and enable searched state and reset the page number
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
        if (!isFetchingSeries) {
            setPageNumber(page + 1);
        }


    }

    return (
        <Listing fetchedData={fetchedSeries} handleEndReached={handleEndReached} isFetching={isFetchingSeries} noMatchingData={noMatchingSeries} renderData={renderSeries} title="No Matching Series" >
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
        </Listing>
    );
};
export default ListingTVScreen;

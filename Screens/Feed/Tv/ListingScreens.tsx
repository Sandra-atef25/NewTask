import { Text, View, FlatList, TouchableOpacity, Dimensions, TextInput, Pressable, Keyboard,Button} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { series } from "../../../Data/mocks";
import { seriesGenres } from "../../../Data/mocks";
import { ItemData, TvProps } from '../../../Models/Tv';
import styles from '../../../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling';

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
    <TouchableOpacity onPress={onPress} style={[{ backgroundColor, borderWidth: 1, borderRadius: 5, margin: 5 }, styles.ViewContainer]}>
        <View style={styles.TextContainer}>
            <Text style={[styles.Itemtext, { color: textColor }]}>ID: {item.id}</Text>
            <Text style={[{ color: textColor }, styles.Itemtext]}>Name: {item.name}</Text>
        </View>
    </TouchableOpacity>
);
const TVSeriesList = ({ tvList, onPress }: listofTvseries) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.ViewContainer}>
            <View style={styles.TextMoviesContainer}>
                <Text style={styles.Itemtext}>
                    Name Of TV Series:{"\n"}
                    <Text style={[styles.Itemtext, { color: 'red' }]}>
                        {tvList.name}
                    </Text>
                </Text>
            </View>
        </TouchableOpacity>
    );
};
const ListingTVScreen = ({ navigation }) => {

    const [selectedId, setSelectedId] = useState<number[]>([]);
    const [selectedTVSeries, setSelectedTVSeries] = useState<TvProps[]>([]);
    const [searchText, setsearchText] = useState<string>("");
    const [clicked, setClicked] = useState<boolean>(false);
    const renderItem = ({ item }: { item: ItemData }) => {
        const backgroundColor = selectedId.includes(item.id) ? 'darkblue' : 'lightblue';
        const color = selectedId.includes(item.id) ? 'white' : 'black';

        const pressHandle = (item: ItemData) => {
            //prevList
            // if prevList includes item.id -> remove item.id
            // else add item.id
            setSelectedId((prevList) => {
                return prevList.includes(item.id) ? prevList.filter((id) => id !== item.id) : [...prevList, item.id]
            });
        };
        /* useEffect(() => {
             async function getExpenses() {
               const moviesGenresList = await fetchMoviesGenres();
               console.log(moviesGenresList)
             }
             getExpenses();
           }, []);*/
        return (
            <Item
                item={item}
                onPress={pressHandle.bind(this, item)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };
    useEffect(() => {
        console.log(selectedId);
        if (selectedId.length == 0) {
            if (searchText.trim().length == 0) {
                setSelectedTVSeries(series);
            }
            else {
                const searchMovies = series.filter((item) => item.name.toLowerCase().startsWith(searchText.trim().toLowerCase()));
                setSelectedTVSeries(searchMovies);
            }

        }
        else {
            //check if more than an id is selected so
            // return all tv series including in his genres ids thoses selected id 
            const matchingTVSeries = series.filter((tvseries) =>
                selectedId.every((genreID) => tvseries.genre_ids.includes(genreID)));
            if (searchText.trim().length === 0) {

                setSelectedTVSeries(matchingTVSeries);
            }
            else {
                const searchTvSeries = matchingTVSeries.filter((item) => item.name.toLowerCase().startsWith(searchText.trim().toLowerCase()));
                if (searchTvSeries.length == 0) {
                    setSelectedTVSeries(matchingTVSeries);
                }
                else {
                    setSelectedTVSeries(searchTvSeries);
                }
            }
            console.log(matchingTVSeries);
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
        */
    }, [selectedId, searchText]);

    const renderMovies = ({ item: tvSeries }: { item: TvProps }) => {
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
        <View style={styles.container}>
            <View style={clicked?styles.textClicked:styles.textUnclicked}>
                <Ionicons name='search' size={20} color='navy' style={styles.icon}></Ionicons>
                <TextInput value={searchText} onChangeText={setsearchText} style = {styles.textin}
                    onFocus={() => { setClicked(true); }} onBlur={()=>{setClicked(false)}}/>
                {
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
                }
            </View>
            <View style={styles.ItemContainer}>
                <FlatList<any> data={seriesGenres} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} style={styles.ItemsContainers} pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false} >
                </FlatList>
            </View>
            <View style={styles.moviesContainer}>
                <FlatList<any> data={selectedTVSeries} renderItem={renderMovies} keyExtractor={(item) => item.id} numColumns={2} ></FlatList>
            </View>
        </View>
    );
};
export default ListingTVScreen;
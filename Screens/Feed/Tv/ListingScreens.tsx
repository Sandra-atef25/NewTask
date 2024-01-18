import { Text, View, FlatList, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView, Pressable, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { series } from "../../../Data/mocks";
import { seriesGenres } from "../../../Data/mocks";
import { ItemData, TvProps } from '../../../Models/Tv';
type listofTvseries = {
    TvL: TvProps;
    onPress: () => void;
};
type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};


const deviceWidth = Dimensions.get("window").width;
const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[{ backgroundColor, borderWidth: 1, borderRadius: 5, margin: 5 }, styles.ViewContainer]}>
        <View style={styles.TextContainer}>
            <Text style={[styles.Itemtext, { color: textColor }]}>ID: {item.id}</Text>
            <Text style={[{ color: textColor }, styles.Itemtext]}>Name: {item.name}</Text>
        </View>
    </TouchableOpacity>
);
function TVseriesList({ TvL, onPress }: listofTvseries) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.ViewContainer}>
            <View style={styles.TextMoviesContainer}>
                <Text style={styles.Itemtext}>
                    Name Of TV Series:{"\n"}
                    <Text style={[styles.Itemtext, { color: 'red' }]}>
                        {TvL.name}
                    </Text>
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const ListingTVScreen = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState<number[]>([]);
    const [selectedMovies, setSelectedMovies] = useState<TvProps[]>([]);
    const [searchText, setsearchText] = useState<string>("");

    
    const rendertem = ({ item }: { item: ItemData }) => {
        const backgroundColor = selectedId.includes(item.id) ? 'darkblue' : 'lightblue';
        const color = selectedId.includes(item.id) ? 'white' : 'black';

        function presshandle(item: ItemData) {
            //prevList
            // if prevList includes item.id -> remove item.id
            // else add item.id
            setSelectedId((prevList) => {
                return prevList.includes(item.id) ? prevList.filter((id) => id !== item.id) : [...prevList, item.id]

            });

        }
        return (
            <Item
                item={item}
                onPress={presshandle.bind(this, item)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };
    useEffect(() => {
        console.log(selectedId);
        setSelectedMovies(series.filter((item) => selectedId.some((id) => item.genre_ids.includes(id))));
        if (searchText.trim() !== "" && selectedId.length !== 0) {
            const nextmovies = series.filter((item) => item.name.toLowerCase().startsWith(searchText.toLowerCase()));
            const checkmovies = nextmovies.filter((item) => selectedMovies.filter((mo) => (mo.id !== item.id)));
            setSelectedMovies(selectedMovies.concat(checkmovies));
        }
        else if (searchText.trim() !== "" && selectedId.length == 0) {
            const nextmovies = series.filter((item) => item.name.toLowerCase().startsWith(searchText.toLowerCase()));
            setSelectedMovies(nextmovies);
        }

    }, [searchText, selectedId]);
    function rendermovies({ item: TvSeries }: { item: TvProps }) {
        function presshandle() {
            navigation.navigate("SeriesDetails", { SeriesDetails: TvSeries });
        }
        return (
            <TVseriesList TvL={TvSeries}
                onPress={presshandle}
            />
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchbar}>
                <Ionicons name='search' size={20} color='navy' style={styles.icon}></Ionicons>


                <TextInput value={searchText} onChangeText={setsearchText} style={styles.textin} />
                <Pressable onPress={() => Keyboard.dismiss()}>
                    <Ionicons name='close' size={25} color='navy' style={{ flexDirection: 'row-reverse', marginHorizontal: 150 }}></Ionicons>
                </Pressable>
            </View>
            <View style={styles.ItemContainer}>
                <FlatList<any> data={seriesGenres} renderItem={rendertem} keyExtractor={item => item.id} horizontal={true} style={styles.ItemsContainers} pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false} >
                </FlatList>
            </View>
            <View style={styles.moviesContainer}>
                <FlatList<any> data={selectedMovies} renderItem={rendermovies} keyExtractor={(item) => item.id} numColumns={2} ></FlatList>
            </View>
        </View>
    );
};

export default ListingTVScreen;
const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moviesContainer: {
        flex: 2,
        alignContent: 'center'
    },
    ItemContainer: {
        flex: 1,
        borderWidth: 2,
        alignContent: "center",
    },
    ItemsContainers: {
        padding: 6
    },
    Itemtext: {
        fontSize: 14,
        fontWeight: 'bold',

    },
    ViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    TextContainer: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    TextMoviesContainer: {
        flex: 1,
        margin: 5,
        height: 200,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: deviceWidth / 2.5,
        backgroundColor: 'pink',
        borderWidth: 2,
        opacity: 0.75

    },
    searchbar: {
        margin: 15,
        borderWidth: 2,
        borderRadius: 25,
        width: '90%',
        flexDirection: 'row'
    },
    textin: {
        marginLeft: 10,
    },
    icon: {
        marginLeft: 5,
    }

});




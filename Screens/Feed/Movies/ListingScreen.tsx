import { Text, View, FlatList, TouchableOpacity, Dimensions, TextInput, ScrollView, Pressable, Keyboard } from "react-native";
import styles from "../../../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { movies } from "../../../Data/mocks";
import { movieGenres } from "../../../Data/mocks";
import { ItemData, MoviesProps } from '../../../Models/Movies';
 
type listofmovies = {
    moviesL: MoviesProps;
    onPress: () => void;
};
type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[{ backgroundColor, borderWidth: 1, borderRadius: 5, margin: 5 }, styles.ViewContainer]}>
        <View style={styles.TextContainer}>
            <Text style={[styles.Itemtext, { color: textColor }]}>ID: {item.id}</Text>
            <Text style={[{ color: textColor }, styles.Itemtext]}>Name: {item.name}</Text>
        </View>
    </TouchableOpacity>
);
function MoviesList({ moviesL, onPress }: listofmovies) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.ViewContainer}>
            <View style={styles.TextMoviesContainer}>
                <Text style={styles.Itemtext}>
                    TitleOfMovie:{"\n"}
                    <Text style={[styles.Itemtext, { color: 'red' }]}>
                        {moviesL.title}
                    </Text>
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const ListingMoviesScreen = ({ navigation }) => {

    const [selectedId, setSelectedId] = useState<number[]>([]);
    const [selectedMovies, setSelectedMovies] = useState<MoviesProps[]>([]);
    const [searchText, setsearchText] = useState<string>("");
    const [clicked, setclicked] = useState<boolean>(true);


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
        setSelectedMovies(movies.filter((item) => selectedId.some((id) => item.genre_ids.includes(id))));
        if (searchText.trim() !== "" && selectedId.length !== 0) {
            const nextmovies = movies.filter((item) => item.title.toLowerCase().startsWith(searchText.toLowerCase()));
            const checkmovies = nextmovies.filter((item) => selectedMovies.filter((mo) => (mo.id !== item.id)));
            setSelectedMovies(selectedMovies.concat(checkmovies));
        }
        else if (searchText.trim() !== "" && selectedId.length == 0) {
            const nextmovies = movies.filter((item) => item.title.toLowerCase().startsWith(searchText.toLowerCase()));
            setSelectedMovies(nextmovies);
        }

    }, [searchText, selectedId]);
    function rendermovies({ item: movie }: { item: MoviesProps }) {
        function presshandle() {

            navigation.navigate("TheMovieSelected", { MoviesDetails: movie });
        }
        return (
            <MoviesList moviesL={movie}
                onPress={presshandle}
            />
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchbar}>
                <Ionicons name='search' size={20} color='navy' style={styles.icon}></Ionicons>
                <TextInput value={searchText} onChangeText={setsearchText} onFocus={() => clicked} style={styles.textin} />
                <Pressable onPress={() => Keyboard.dismiss()}>
                    <Ionicons name='close' size={25} color='navy' style={{ flexDirection: 'row-reverse', marginHorizontal: 150 }}></Ionicons>
                </Pressable>
            </View>
            <View style={styles.ItemContainer}>
                <FlatList<any> data={movieGenres} renderItem={rendertem} keyExtractor={item => item.id} horizontal={true} style={styles.ItemsContainers} pagingEnabled={true}
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
export default ListingMoviesScreen;



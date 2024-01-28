import {View,TouchableOpacity,Text} from 'react-native';
import {ItemData} from '../Models/Movies';
import styles from '../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling';
type itemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

export const Item = ({ item, onPress, backgroundColor, textColor }: itemProps) => (
    <View style={styles.outerContainerofGenres}>
        <TouchableOpacity onPress={onPress} style={[{
            backgroundColor,
            borderRadius: 20, margin: 5,
        }, styles.ViewContainer]}>
            <View style={styles.TextContainer}>
                {/*<Text style={[styles.Itemtext, { color: textColor }]}>{item.id}</Text>*/}
                <Text style={[{ color: textColor }, styles.Itemtext]}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    </View>

);
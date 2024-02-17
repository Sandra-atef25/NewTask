import { View, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { Colors } from '../../../theme/colors/Colors';
import { SearchBarProp } from './interface/interface';
const SearchBar = ({ searchText, setSearchText, onClearSearchHandle }:SearchBarProp) => {
    return (
        <View style={styles.textClicked}>
            <Ionicons name='search' size={20} color={Colors.navy} style={styles.icon}></Ionicons>
            <TextInput value={searchText} onChangeText={setSearchText} style={styles.textin} placeholder="Search" />
            <Button color={Colors.red} title='clear' onPress={onClearSearchHandle} />
        </View>
    );
};
export default SearchBar;
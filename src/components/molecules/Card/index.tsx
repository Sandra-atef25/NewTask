import { TouchableOpacity, View, Text } from 'react-native';
import { Colors } from '../../../theme/colors/Colors';
import CustomImage from '../../atoms/CustomImage';
import Title from '../../atoms/Title';
import { cardProps } from './interface/interface';
import { styles } from './style';
const Card = ({ title, posterPath, onPress }:cardProps ) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.ViewContainer}>
            <View style={styles.CardContainer}>
                <CustomImage source={posterPath}/>
                <Title title={title} color={Colors.white} fontSize={16} fontWeight="normal"/>
            </View>
        </TouchableOpacity>
    );
};
export default Card;

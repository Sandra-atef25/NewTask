import { View, ImageBackground } from 'react-native';
import { Colors } from '../../../theme/colors/Colors';
import IconButton from '../../atoms/IconButton';
import Title from '../../atoms/Title';
import { customImageProps } from './interface/interface';
import { styles } from './style';
const Image = ({ posterPath, pressHandle, dataIsFavorite, heartButtonPressHandler }:customImageProps) => {
    return (
        <View style={styles.Container}>
            <ImageBackground source={{ uri: posterPath }} style={styles.image}>
                <View style={styles.headerContainer}>
                    <IconButton color={Colors.white} onPress={pressHandle} icon="arrow-back"/>
                    <Title title="Details" color={Colors.white} fontSize={20} fontWeight="bold" />
                    <IconButton
                        icon={dataIsFavorite ? "heart" : "heart-outline"}
                        color={dataIsFavorite ? Colors.red : Colors.white}
                        onPress={heartButtonPressHandler}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};
export default Image;


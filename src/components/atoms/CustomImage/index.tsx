import { View, Image } from 'react-native';
import { styles } from './style';
import { customImageProps } from './interface/interface';
const CustomImage = ({source}:customImageProps) => {
    return (
        <View style={styles.imageConatiner}>
            <Image source={{ uri: source }} style={styles.image} />
        </View>
    );
};
export default CustomImage;
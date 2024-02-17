import { View, ActivityIndicator } from 'react-native';
import { Colors } from '../../../theme/colors/Colors';
import { styles } from './style';
const LoadingOverlay = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.white} />
        </View>
    );
}
export default LoadingOverlay;
import { View, Button } from 'react-native';
import { primaryButtonProps } from './interface/interface';
import { styles } from './style';

const PrimaryButton = ({ name, color, onPress }: primaryButtonProps) => {
    return (
        <View style={styles.ButtonContainer}>
            <Button title={name} color={color} onPress={onPress} />
        </View>
    );
};
export default PrimaryButton;
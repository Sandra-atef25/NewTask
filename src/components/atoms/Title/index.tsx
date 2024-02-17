import { View, Text } from 'react-native';
import { titleProps } from './interface/interface';
import { styles } from './style';

const Title = ({ title, color, fontSize, fontWeight }: titleProps) => {
    return (
        <View style={styles.Container}>
            <Text style={{ color: color, fontWeight: fontWeight, fontSize: fontSize }}>{title}</Text>
        </View>
    );
};
export default Title;



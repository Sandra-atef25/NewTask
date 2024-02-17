import { View, TouchableOpacity, Text } from 'react-native';
import Title from '../../atoms/Title';
import { itemProps } from './interface/interface';
import {styles} from './style';


export const Item = ({ item, onPress, backgroundColor, textColor }: itemProps) => (
    <View >
        <TouchableOpacity onPress={onPress} style={[{
            backgroundColor,
            borderRadius: 20, margin: 5
        }, styles.ViewContainer]}>
            <Title color={textColor} fontSize={16} fontWeight="normal" title={item.name.toString()}/>
        </TouchableOpacity>
    </View>

);
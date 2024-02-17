import {View} from 'react-native';
import { ReactNode } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import {styles} from './style';
import { Colors } from '../../../theme/colors/Colors';
import { gradientProp } from './interface/interface';
const Gradient =({children}:gradientProp)=>{
    return (
        <View>
            <LinearGradient colors={[Colors.babyBlue,Colors.babyPink]} style={styles.container}>
                {children}
            </LinearGradient>
        </View>
    )

}
export default Gradient;
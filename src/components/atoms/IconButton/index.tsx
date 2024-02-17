import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { iconButtonProps } from './interface/interface';
const IconButton=({color,onPress,icon}:iconButtonProps) =>{
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};
export default IconButton;
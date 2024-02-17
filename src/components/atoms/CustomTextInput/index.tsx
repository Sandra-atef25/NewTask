import { Text, TextInput,View } from 'react-native';
import { textInputProps } from './interface/interface';
import { styles } from './style';
const CustomTextInput = ({textLabel,placeholder,enteredName,inputHandler}:textInputProps) => {
    return (
        <View style={styles.innercon}>
            <Text style={styles.textuser}>{textLabel}</Text>
            <TextInput
                placeholder={placeholder}
                style={styles.texti}
                value={enteredName}
                onChangeText={inputHandler}
            />
        </View>
    );
};
export default CustomTextInput;
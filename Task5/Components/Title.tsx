
import { View, Text, StyleSheet } from 'react-native';

const Title=({ title, TextIen }: { title: any, TextIen: string }) =>{
    return (
        <View style={styles.Container}> 
            <Text style={styles.Textid}>{TextIen}
                <Text style={styles.Text}>{title}</Text>
            </Text>
        </View>

    );
};

export default Title;
const styles = StyleSheet.create({
    Container: {
        margin: 5,
    },

    Text:
    {
        fontSize:16,
        padding: 10,
        color: 'white'
    },
    Textid: {
        fontSize: 16,
        color: 'blue'
    },
})
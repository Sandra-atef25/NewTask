import { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Title({ title, TextIen }: { title: any, TextIen: string }) {
    return (
        <View style={styles.Container}>
           
            <Text style={styles.Textid}>{TextIen}
                <Text style={styles.Text}>{title}</Text>
            </Text>
            

        </View>

    );
}

export default Title;
const styles = StyleSheet.create({
    Container: {
        margin: 5,
    },

    Text:
    {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,

        color: 'black'
    },
    Textid: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    },
})
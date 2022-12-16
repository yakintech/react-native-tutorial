import { StyleSheet, View, Text } from 'react-native'


//props -> object
export default function Box({ title, description, color }) {

    console.log('color', color);
    //<></>  -> Fragment
    return <View style={{ ...styles.box, backgroundColor: color }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
    </View>
}


const styles = StyleSheet.create({
    box: {
        marginTop: 10,
        flex: 2,
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 14
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: 'white'
    },
    text: {
        color: 'white'

    }
})



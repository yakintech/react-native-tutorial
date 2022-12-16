import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text>Friday, 15 Dec</Text>
            <Text>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flex: 1,
        flexDirection:'row', 
        justifyContent:'space-between'
    }
})


export default Header
import { View, TextInput, StyleSheet, Button, Text } from 'react-native'
import React, { useState } from 'react'
const names = ["Çağatay", "Aykut", "Müge", "Ertan"];


const StateInput = () => {

    const [name, setname] = useState('');
    const [nameList, setnameList] = useState(names);

    const getName = (e) => {
        console.log('Input ', e);
    }

    const addName = () => {
        setnameList([...nameList, name]);
        setname('');
    }

    const deleteItem = (index) => {
        names.splice(index, 1);
        setnameList([...names]);
    }

    return (<>
        <View>
            <TextInput
                style={styles.input}
                // onChangeText={(e) => setname(e)}
                onChangeText={setname}
                value={name}
            />

            <Button title='Add' onPress={() => addName()}></Button>

        </View>
        <View>
            {
                nameList && nameList.map((item, index) => <>
                    <Text style={styles.textStyle} key={index}>{item}</Text>
                    <Button color='tomato' title='Delete' onPress={() => deleteItem(index)}></Button>
                </>)
            }
        </View>
    </>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    textStyle: {
        fontSize: 30
    }
});


export default StateInput
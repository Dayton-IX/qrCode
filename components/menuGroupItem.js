import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuGroupItem = props => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.6} style={styles.container} >
            <Text style={styles.text}>{props.groupName}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginHorizontal: 15,
        marginVertical: 15,
        borderRadius: 15,
        borderColor: 'grey',
        borderWidth: 2,
        alignItems: 'center'
    },
    text: {
        fontSize: 23
    }
});

export default MenuGroupItem;
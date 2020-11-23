import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Item = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container} >
            <View style={styles.left}>
                <Text style={styles.name}>{props.item.name}</Text>
                <Text style={styles.price}>${props.item.price}</Text>
                <Text sytle={styles.time}>{props.item.time} min</Text>
                <Text style={styles.description}>{props.item.description}</Text>
            </View>
            <View style={styles.right} >
                <FontAwesome5 name="cart-plus" size={50} color="#e74c3c" />
            </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {
        width: '80%'
    },
    right: {
        // marginLeft: 10,
        alignSelf: 'center',
    }
});

export default Item;
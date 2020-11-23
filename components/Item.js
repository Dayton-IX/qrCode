import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = props => {
    return (
        <View style={styles.container} >
            <View style={styles.left}>
                <Text style={styles.name}>{props.item.name}</Text>
                <Text style={styles.price}>${props.item.price}</Text>
                <Text sytle={styles.time}>{props.item.time} min</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Item;
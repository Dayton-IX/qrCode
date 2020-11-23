import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuGroupItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container} >
            <Text style={styles.text}>{props.groupName}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});

export default MenuGroupItem;
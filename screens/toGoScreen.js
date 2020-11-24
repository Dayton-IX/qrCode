import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MenuGroupItem from '../components/MenuGroupItem';

import data from '../data/dummy-data';

const ToGoScreen = props => {
    return (
        <View style={styles.screen} >
            <FlatList 
                data={data.restaurants}
                keyExtractor={(item) => item.id}
                renderItem={restaurantData => <MenuGroupItem name={restaurantData.item.name} onPress={() => props.navigation.navigate('Menu', {restaurantID: restaurantData.item.id})} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ToGoScreen;
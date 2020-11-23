import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Item from '../components/Item';

import data from '../data/dummy-data';

const GroupItemsScreen = ({route, navigation}) => {
    return (
        <View style={styles.screen} >
            <View style={styles.title}>
                <Text style={styles.titleText}>{route.params.group.groupName}</Text>
            </View>
            <FlatList
                data={route.params.group.items}
                keyExtractor={(item) => item.id}
                renderItem={itemData => <Item item={itemData.item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default GroupItemsScreen;
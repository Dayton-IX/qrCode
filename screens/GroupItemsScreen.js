import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Item from '../components/Item';

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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    title: {
        alignItems: 'center',
        marginVertical: 20
    },
    titleText: {
        fontSize: 25
    }
});

export default GroupItemsScreen;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';

import data from '../data/dummy-data';
import MenuGroupItem from '../components/MenuGroupItem';

const MenuScreen = ({route, navigation}) => {
    const restaurants = data.restaurants;
    const [restaurant, setRestaurant] = useState({
        name: '',
        id: '',
        menu: []
    })

    useEffect(() => {
        restaurants.forEach(restaurant => {
            if (restaurant.id === route.params.restaurantID) {
                setRestaurant({name: restaurant.name, id: restaurant.id, menu: restaurant.menu})
                return
            }
        });
    }, [])

    
    console.log(restaurant);
    return (
        <View style={styles.screen} >
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>Welcome to {restaurant.name}</Text>
            </View>
            {restaurant.menu.forEach(group => {
                console.log(group);
                return <Text>{group.groupName}</Text>
            })}
            <FlatList
                data={restaurant.menu}
                keyExtractor={(group) => group.id}
                renderItem={groupData => <MenuGroupItem id={groupData.item.id} onPress={() => navigation.navigate('Group', {group: groupData.item})} name={groupData.item.groupName} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    titleWrapper: {
        alignItems: 'center',
        marginVertical: 20,
    },
    titleText: {
        fontSize: 25
    }
});

export default MenuScreen;
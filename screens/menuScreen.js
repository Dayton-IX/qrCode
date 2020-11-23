import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';

import data from '../data/dummy-data';
import MenuGroupItem from '../components/menuGroupItem';

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
            } else {
                Alert.alert('Invalid QR Code');
            }
        });
    }, [])

    
    console.log(restaurant);
    return (
        <View style={styles.screen} >
            <Text>Welcome to {restaurant.name}</Text>
            {restaurant.menu.forEach(group => {
                console.log(group);
                return <Text>{group.groupName}</Text>
            })}
            <FlatList
                data={restaurant.menu}
                keyExtractor={(group) => group.id}
                renderItem={groupData => <MenuGroupItem groupName={groupData.item.groupName} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default MenuScreen;
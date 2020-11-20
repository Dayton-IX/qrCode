import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import data from '../data/dummy-data';

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
        </View>
    );
};

const styles = StyleSheet.create({});

export default MenuScreen;
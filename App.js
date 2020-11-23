import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import inHouseScreen from './screens/InHouseScreen';
import toGoScreen from './screens/ToGoScreen';
import MenuScreen from './screens/MenuScreen';
import GroupItemsScreen from './screens/GroupItemsScreen';

const start = ({route, navigation}) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('In House')}>
        <Text style={styles.buttonText}>Dine In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('To Go')}>
        <Text style={styles.buttonText}>Take Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={start} />
        <Stack.Screen name="In House" component={inHouseScreen} />
        <Stack.Screen name="To Go" component={toGoScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Group" component={GroupItemsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#e74c3c',
    width: 200,
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 50,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
});

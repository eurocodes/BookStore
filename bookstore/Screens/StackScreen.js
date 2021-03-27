import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import ItemScreen from './ItemScreen';

const Stack = createStackNavigator();

function StackScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Login"}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login Page' }} />
                <Stack.Screen name="Single Book" component={ItemScreen} options={{ title: 'Single Book' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackScreen;
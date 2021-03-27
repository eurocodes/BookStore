import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Single Book")}>
                <Text>Single Book</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
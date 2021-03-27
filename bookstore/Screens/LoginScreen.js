import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

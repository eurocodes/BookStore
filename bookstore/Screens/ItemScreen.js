import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ItemScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Item Screen</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ItemScreen

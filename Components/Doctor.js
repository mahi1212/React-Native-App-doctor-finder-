import React from 'react'
import { View, Text } from 'react-native'

export default function Doctor({doctor}) {
    const {name, email, image} = doctor
    return (
        <View>
            <Text>Name : {name}</Text>
            <Text>Email : {email}</Text>
        </View>
    )
}

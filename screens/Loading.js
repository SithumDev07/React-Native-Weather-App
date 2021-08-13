import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const Loading = () => {
    return (
        <View style={tw`flex-1 justify-end px-5 py-10 bg-yellow-400`}>
            <Text style={tw`text-white text-3xl font-semibold`}>How's today</Text>
        </View>
    )
}

export default Loading

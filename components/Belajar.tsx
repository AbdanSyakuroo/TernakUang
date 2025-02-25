import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Entypo } from '@expo/vector-icons'

const Belajar = ({iconMapel, namaMapel}:any) => {
    return (
        <View style={tw`w-1/4 items-center mb-5`}>
            <View style={tw`bg-neutral-700 px-3 py-3 rounded-full`}>
                    <Entypo name={iconMapel} size={40} style={tw`text-neutral-300`} resizeMode="contain" />
            </View>
      <Text style={tw`text-center mt-1 text-white`}>{namaMapel}</Text>
    </View>
    
      )
}

export default Belajar
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import tw from 'twrnc'
const Medsos = ({nameIcon}:any) => {
    return (
      <TouchableOpacity style={tw`flex items-center justify-center border-2 border-gray-200 w-12 h-12 rounded-lg`}>
        <FontAwesome name={nameIcon} size={20} style={tw`text-white`}/>
      </TouchableOpacity>
    )
  }

export default Medsos
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import tw from 'twrnc'
const ButtonPrimary = ({teXT, bgBtn, bgText, rute, borderColor}:any) => {
    const navigation = useRouter();
  return (
    <TouchableOpacity style={[tw`bg-${bgBtn} w-93 py-4 rounded-lg mx-5 border border-${borderColor} mb-3`]} onPress={() => navigation.navigate(rute)}>
      <Text style={tw`text-${bgText} font-bold text-center`}>{teXT}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary
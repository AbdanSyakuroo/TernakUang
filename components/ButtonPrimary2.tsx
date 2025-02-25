import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome } from '@expo/vector-icons'
const ButtonPrimary2 = ({iconFirst, textFirst}) => {
  return (
     <View style={tw`bg-gray-700 w-46 px-2 py-2.5 rounded-lg border-l-4 border-[#97F69B]`}>
               <View style={tw`flex-row gap-2`}>
                <View style={tw`bg-neutral-800 w-7 h-7 flex justify-center items-center rounded-full `}>
                        <FontAwesome name={iconFirst} style={tw`text-white`} size={14}/>
                </View>
                 <Text style={[tw`text-white text-base`,{ fontFamily: 'Poppins-Regular' }]}>{textFirst}</Text>
               </View>
            </View>
  )
}

export default ButtonPrimary2
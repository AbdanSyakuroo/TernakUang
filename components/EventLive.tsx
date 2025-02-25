import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const EventLive = ({Tanggal, Jam, Judul, Harga, Gambarku}:any) => {
  return (
    <View>
    <View style={tw`bg-neutral-800 h-30 w-80 rounded-xl mt-6 flex-row`}>
    <View>
        <Image source={Gambarku} style={tw`rounded-lg h-24 w-24 ml-3 mt-3`} />
    </View>
    <View>
      <Text style={[tw`text-[#97F69B] text-xs mt-3 ml-3`, {fontFamily : "Poppins-Regular"}]}>{Tanggal} <Text style={tw`text-neutral-500`}>{Jam}</Text></Text>
      <Text style={tw`text-white font-semibold ml-3 mt-2 w-[40]`}>{Judul} </Text>
      <Text style={tw`text-white font-semibold ml-3 mt-2`}>{Harga}</Text>
    </View>
  </View>
  </View>
  )
}

export default EventLive
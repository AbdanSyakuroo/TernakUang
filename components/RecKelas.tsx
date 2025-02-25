import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons'
import tw from 'twrnc'

const RecKelas = ({ img, time, title, date}:any) => {
  return (
    <View style={tw`w-44 h-46 bg-neutral-800 rounded-lg`}>
      <Image source={img} style={tw`w-44 h-23 rounded-t-lg`}/>
      <View style={tw`p-3 justify-between h-24`}>
        <View style={tw`flex-row items-center gap-2`}>
          <Octicons name='dot-fill' style={tw`text-white`}/>
          <Text style={tw`text-neutral-400`}>{time}</Text>
        </View>
        <Text style={tw`text-white font-bold h-7`}>{title}</Text>

        <Text style={tw`text-neutral-400`}>{date}</Text>
      </View>
    </View>
  )
}

export default RecKelas

const styles = StyleSheet.create({})
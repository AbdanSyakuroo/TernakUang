import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Kategori = ({text, bgcolor}) => {
  return (
    <TouchableOpacity style={tw` mt-2 border border-white py-2 px-3 rounded-md bg-${bgcolor}`}>
        <Text style={tw`text-white text-[4]`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Kategori

const styles = StyleSheet.create({})
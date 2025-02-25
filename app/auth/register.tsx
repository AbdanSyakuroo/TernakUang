import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ButtonPrimary from '@/components/ButtonPrimary'
import Medsos from '@/components/Medsos'
import { useRouter } from 'expo-router'
const register = () => {

    return (
        <SafeAreaView style={tw`h-full flex justify-center`}>
        <View style={tw`bottom-5`}>
          <Image source={require("../../assets/images/ternakuangsignin.png")} style={tw`w-55 h-45 mx-1`} />
          <View style={tw`bottom-13`}>
            <TextInput style={tw`bg-neutral-800 border border-neutral-500 mt-2 mx-5 py-4 rounded-md`} />
          <TextInput style={tw`bg-neutral-800 border border-neutral-500 mt-3 mx-5 py-4 rounded-md mb-5`} /> 
          
          {/* <FontAwesome6 name="eye-slash" style={tw` text-gray-500 text-xl`} /> */}
          
        
          
          <ButtonPrimary teXT="Daftar" bgBtn="[#97F69B]" bgText="black" rute="(tabs)/home" />

          <Text style={tw`text-gray-500 mt-2 ml-5`}>Dengan mendaftar kamu menyetujui <Text style={tw`underline`}>Syarat dan Ketentuan</Text>. <Text style={tw`underline`}>Privacy Policy dan Disclaimer</Text></Text>
          </View>
          
         
        </View>
        </SafeAreaView>
      )
}

export default register
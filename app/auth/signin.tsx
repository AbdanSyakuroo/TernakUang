import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import ButtonPrimary from '@/components/ButtonPrimary'
import Medsos from '@/components/Medsos'
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
const signin = () => {
    const antar = useRouter();
    return (
        <SafeAreaView style={tw`h-full flex justify-center`}>
        <View style={tw`bottom-5`}>
          <Image source={require("../../assets/images/ternakuangsignin.png")} style={tw`w-55 h-45 mx-1`} />
          <View style={tw`bottom-13`}>
            <TextInput style={tw`bg-neutral-800 border border-neutral-500 mt-2 mx-5 py-4 rounded-md`} />
          <TextInput style={tw`bg-neutral-800 border border-neutral-500 mt-3 mx-5 py-4 rounded-md`} /> 
          
          {/* <FontAwesome6 name="eye-slash" style={tw` text-gray-500 text-xl`} /> */}
          <View style={tw`flex-row justify-between mb-7`}>
              <View style={tw`ml-5 mt-3 flex-row`}>
            <MaterialCommunityIcons name='checkbox-blank-outline' size={20} style={tw`text-white mr-1`}/>
            <Text style={tw`text-white`}>Ingat Saya</Text>
          </View>
          <View>
            <Text style={tw`text-gray-500 font-semibold mr-5 mt-3`}>Lupa Password</Text>
          </View>
          </View>
        
          
          <ButtonPrimary teXT="Log in" bgBtn="[#97F69B]" bgText="black" rute="(tabs)/home"/>

          <Text style={tw`text-center text-gray-500 mt-2`}>Belum Punya Akun?<Text style={tw`text-[#97F69B] font-bold`} onPress={() => antar.navigate("/auth/register")}> Daftar</Text></Text>
          </View>
          
          <Text style={tw`text-gray-500 font-semibold text-center mt-2 text-sm`}>Atau Masuk Melalui</Text>
          <View style={tw`h-2 w-95 border-b border-neutral-700 mx-4 mt-4 mb-5`}></View>
          <View style={tw`flex flex-row mx-12 gap-3 justify-center items-center mt-2 my-3`}>
              <Medsos nameIcon={"google"}/>
              <Medsos nameIcon={"apple"}/>
        </View>
         
         
              {/* <View style={tw`mt-5`}>
                  <Text style={tw`text-center font-semibold text-gray-500`}>By signin up you agree to vidio's</Text>
          <Text style={tw`text-center font-semibold text-blue-500`}>Term of Service and Privacy Policy</Text>
              </View> */}
        </View>
        </SafeAreaView>
      )
}

export default signin
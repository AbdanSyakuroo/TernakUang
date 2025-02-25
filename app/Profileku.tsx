import tw from "twrnc";

import { Image, StyleSheet, Platform, View, Text, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const navi = useRouter();

  return (
    <View style={tw`bg-black h-full`}>
      <SafeAreaView>
        <ScrollView>
        <View style={tw`flex-row justify-between items-center px-3 py-5`}>
          <FontAwesome5 name="chevron-left" style={tw`text-white`} size={20} onPress={() => {navi.back()}}/>
          <Text style={[tw`text-white text-xl text-center`, {fontFamily : 'Poppins-SemiBold'}]}>Profil</Text>
          <View></View>
        </View>

        <View style={tw`items-center justify-center py-5`}>
          <View style={tw`relative`}>
            <Image source={require('@/assets/images/user-icon.png')} style={tw`w-25 h-25 opacity-55`}/>
            <View style={tw`bg-neutral-700 h-7 w-7 rounded-full border-4 border-black absolute right-0 bottom-0 items-center justify-center`}>
              <FontAwesome name="pencil" size={10} style={tw`text-neutral-300`}/>
            </View>
          </View>
          <Text style={tw`text-center text-white text-2xl font-bold mt-4`}>chamjodesign</Text>
          <Text style={tw`text-center text-white text-lg font-extralight italic`}>Non Member</Text>
        </View>

        <View>
          <View style={tw`bg-neutral-800 px-5 py-2`}>
            <Text style={tw`text-neutral-500 text-base font-bold`}>Data Pribadi</Text>
          </View>

          <View style={tw`pl-5 flex-row items-center`}>
            <AntDesign name="user" style={tw`text-white w-10`} size={18}/>
            <View style={tw`flex-row justify-between w-90 border-b border-neutral-800 py-4 pr-5`}>
              <Text style={tw`text-white text-base`}>Ubah Profile</Text>
              <AntDesign name="right" style={tw`text-white`} size={20}/>
            </View>
          </View>

          <View style={tw`pl-5 flex-row items-center`}>
            <AntDesign name="key" style={tw`text-white w-10`} size={18}/>
            <View style={tw`flex-row justify-between w-90 border-b border-neutral-800 py-4 pr-5`}>
              <Text style={tw`text-white text-base`}>Ubah Password</Text>
              <AntDesign name="right" style={tw`text-white`} size={20}/>
            </View>
          </View>

          <View style={tw`pl-5 flex-row items-center`}>
            <AntDesign name="clockcircleo" style={tw`text-white w-10`} size={18}/>
            <View style={tw`flex-row justify-between w-90 border-b border-neutral-800 py-4 pr-5`}>
              <Text style={tw`text-white text-base`}>Riwayat Transaksi</Text>
              <AntDesign name="right" style={tw`text-white`} size={20}/>
            </View>
          </View>
        </View>
        <View>
          <View style={tw`bg-neutral-800 px-5 py-2 flex-row items-center justify-between`}>
            <Text style={tw`text-neutral-500 text-base font-bold`}>Bantuan</Text>
            <Text style={tw`text-neutral-500 text-sm font-bold`}>Terakhir update 19/07/22 v2.2.1</Text>
          </View>

          
          <View style={tw`pl-5 flex-row items-center`}>
            <AntDesign name="Safety" style={tw`text-white w-10`} size={18}/>
            <View style={tw`flex-row justify-between w-90 border-b border-neutral-800 py-4 pr-5`}>
              <Text style={tw`text-white text-base`}>Kebijakan Privasi</Text>
              <AntDesign name="right" style={tw`text-white`} size={20}/>
            </View>
          </View>

          
          <View style={tw`pl-5 flex-row items-center`}>
            <AntDesign name="questioncircleo" style={tw`text-white w-10`} size={18}/>
            <View style={tw`flex-row justify-between w-90 border-b border-neutral-800 py-4 pr-5`}>
              <Text style={tw`text-white text-base`}>Frequently Asked Questions</Text>
              <AntDesign name="right" style={tw`text-white`} size={20}/>
            </View>
          </View>
          
          <View style={tw`pl-5 flex-row items-center`}>
            <AntDesign name="message1" style={tw`text-white w-10`} size={18}/>
            <View style={tw`flex-row justify-between w-90 border-b border-neutral-800 py-4 pr-5`}>
              <Text style={tw`text-white text-base`}>Hubungi Kami</Text>
              <AntDesign name="right" style={tw`text-white`} size={20}/>
            </View>
          </View>
          
          <View style={tw`pl-5 flex-row items-center`}>
            <AntDesign name="hearto" style={tw`text-white w-10`} size={18}/>
            <View style={tw`flex-row justify-between w-90 border-b border-neutral-800 py-4 pr-5`}>
              <Text style={tw`text-white text-base`}>Rate Ternak Uang</Text>
              <AntDesign name="right" style={tw`text-white`} size={20}/>
            </View>
          </View>
          
          <View style={tw`pl-5 flex-row items-center`}>
            <AntDesign name="edit" style={tw`text-white w-10`} size={18}/>
            <View style={tw`flex-row justify-between w-90 border-b border-neutral-800 py-4 pr-5`}>
              <Text style={tw`text-white text-base`}>Feedback Form</Text>
              <AntDesign name="right" style={tw`text-white`} size={20}/>
            </View>
          </View>
          
          <TouchableOpacity style={tw`px-5 py-4 flex-row items-center`} onPress={() => {navi.navigate('/auth/signin')}}>
            <AntDesign name="logout" style={tw`text-white w-10`} size={18}/>
            <Text style={tw`text-white text-base`}>Logout</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
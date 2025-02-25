import tw from "twrnc";

import { Image, StyleSheet, Platform, View, Text, ImageBackground, ScrollView} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

import { Link, useRouter } from "expo-router";
import { useState } from "react";
import ButtonPrimary2 from "@/components/ButtonPrimary2";
import EventLive from "@/components/EventLive";
import Belajar from "@/components/Belajar";
import Modul from "@/components/Modul";
import Kategori from "@/components/Kategori";

export default function HomeScreen() {

  const DataButton = [
    { iconFirst: "graduation-cap", textFirst: "Modul Akademi" },
    { iconFirst: "users", textFirst: "Community" },
    { iconFirst: "ticket", textFirst: "Event Live" },
    { iconFirst: "wechat", textFirst: "Grup Diskusi" },
  ]

  const DataEvent1 =[
    {Gambarku : require('../../assets/images/dulukitasahabat.jpeg'), Tanggal : 'Hari Ini, 24 Jun' , Jam : '19.00', Judul : 'Road to Masterclass with Timothy Ronald', Harga : 'Free'},
    {Gambarku : require('../../assets/images/dulukitasahabat.jpeg'), Tanggal : 'Hari Ini, 25 Jun' , Jam : '20.00', Judul : 'Road to Masterclass with Timothy Ronald', Harga : 'Free'},
  ]
  const DataEvent2 =[
    {Gambarku : require('../../assets/images/dulukitasahabat.jpeg'), Tanggal : 'Hari Ini, 26 Jun' , Jam : '21.00', Judul : 'Road to Masterclass with Timothy Ronald', Harga : 'Free'},
    {Gambarku : require('../../assets/images/dulukitasahabat.jpeg'), Tanggal : 'Hari Ini, 27 Jun' , Jam : '22.00', Judul : 'Road to Masterclass with Timothy Ronald', Harga : 'Free'},
  ]

  const flexMapel = [

    { iconMapel: 'wallet' , namaMapel: 'Manajemen Income' },
    { iconMapel: 'newsletter' , namaMapel: 'Asuransi' },
    { iconMapel: 'line-graph' , namaMapel: 'Saham' },
    { iconMapel: 'briefcase' , namaMapel: 'Reksa Dana' },
    { iconMapel: 'creative-commons' , namaMapel: 'Crypto Currency' },
    { iconMapel: 'flow-branch' , namaMapel: 'Peer-to-Peer Landing' },
    { iconMapel: 'text-document-inverted' , namaMapel: 'Obligasi' },
    { iconMapel: 'windows-store' , namaMapel: 'Lainnya' }
  ]

  const Module = [
    {img :  require('../../assets/images/dulukitasahabat.jpeg'), title : 'Strategi bisnis modal kecil', lvl : 'Beginner', vid : '6 Video'},
    {img :  require('../../assets/images/dulukitasahabat.jpeg'), title : 'Strategi bisnis modal kecil', lvl : 'Beginner', vid : '6 Video'},
    {img :  require('../../assets/images/dulukitasahabat.jpeg'), title : 'Strategi bisnis modal kecil', lvl : 'Beginner', vid : '6 Video'}
  ]

  const Kategorizz = [
    {text: 'Modul', bgcolor: 'neutral-500'},
    {text: 'Watchlist', bgcolor: ''},
    {text: 'News', bgcolor: ''},
    {text: 'Event', bgcolor: ''},
    {text: 'Reports', bgcolor: ''},
    {text: 'Recommendation', bgcolor: ''},
  ]

  const [isOpen, setIsOpen] = useState(true);
  function closeItem() {
    setIsOpen(false);
  }

  const navi = useRouter();
  return (
    <SafeAreaView>
      <View style={tw`mx-3`}>

   
        <View style={tw`flex-row justify-between`}>
                  <Text style={tw`text-white text-xl font-extrabold`}>Hai, Calon Sultan!</Text>
                  <View style={tw`flex-row gap-6`}>
                    <MaterialCommunityIcons name="android-messages" style={tw`text-white text-2xl`}/>
                  <FontAwesome name="user-circle-o" style={tw`text-white text-2xl`}  onPress={() => {navi.navigate("/Profileku")}}/>
                  </View>    
        </View>
        {isOpen && ( // Only render when isOpen is true
            <View style={tw`w-full rounded-lg h-18 items-center justify-between bg-neutral-800 flex-row px-3 mt-4`}>
              <View style={tw`flex-row items-center w-2/3 gap-3`}>
                <MaterialCommunityIcons name='bell-badge' size={24} style={tw`text-white bg-neutral-500 rounded-full p-2`} />
                <Text style={[tw`text-white text-[2.8]`, { fontFamily: 'Poppins-Regular' }  ]}>
                  Nikmati insight, berita dan update terkini, <Text style={tw`underline text-[#97F69B]`}>nyalakan notifikasi</Text>
                </Text>
              </View>
              <AntDesign onPress={closeItem} name='close' size={20} color='white' />
            </View>
          )}
   </View>
              <ScrollView style={tw`mx-3 mt-3 mb-30`}>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row gap-3 mt-5`}>
            <View>
              
            </View>
            <Image source={require('../../assets/images/hometernak4.jpeg')} style={tw`w-90 h-45 rounded-xl`} resizeMode="cover" />
            <Image source={require('../../assets/images/hometernak2.jpg')} style={tw`w-90 h-45 rounded-xl`} resizeMode="cover" />
            <Image source={require('../../assets/images/hometernak3.jpg')} style={tw`w-90 h-45 rounded-xl`} resizeMode="cover" />
          </View>
        </ScrollView>
        
        <View style={tw`flex flex-row flex-wrap justify-between gap-2.5 mt-5`}>
        {DataButton.map((dataButton, index) => (
          <ButtonPrimary2 key={index} iconFirst={dataButton.iconFirst} textFirst={dataButton.textFirst} />
        ))}
</View>

{/* <View style={tw`bg-neutral-800 h-23 mt-5 w-96.5 flex justify-center`}>
  <View style={tw`flex-row gap-3`}>
  <Image source={require('../../assets/images/favicon.png')} style={tw`w-8 h-8 ml-3 rounded-xl`} resizeMode="contain" />
  <View style={tw`flex justify-center`}>
    <Text style={[ tw`text-white`,{fontFamily : "Poppins-Bold"}]}>Yuk, Ikuti <Text style={tw`text-[#97F69B]`}>Tes Finansial</Text></Text>
    <Text style={[tw`text-white text-xs`,{fontFamily : "Poppins-Regular"}]}>Dapatkan Saran & Rekomendasi Belajarmu</Text>
  </View>
  </View>

</View> */}

<View style={tw`w-full mt-5 rounded-lg bg-neutral-800 flex-row gap-4 px-4 py-3 items-center`}>
          <Image source={require('@/assets/images/favicon.png')} style={tw`rounded-lg h-12 w-12`} />
            <View style={tw` mr-2`}>
              <Text style={[tw`text-white font-semibold`, {fontFamily : "Poppins-Bold"}]}>Yuk, Ikuti <Text style={tw`text-[#97F69B]`}>Tes Finansial</Text>!</Text>
              <Text style={[tw`text-white text-[2.6]`, {fontFamily: 'Poppins-Regular'}]}>Dapatkan Saran & Rekomendasi Belajarmu</Text>
            </View>
            <View style={tw` bg-[#97F69B] rounded-full p-2 ml-1`}>
              <AntDesign name='arrowright' style={tw``} size={12} />
            </View>
          </View>
  <View style={tw`flex-row justify-between`}>
    <View style={tw`flex-row`}>
       <AntDesign name="calendar" style={tw`text-white mt-8`} size={30}/>
      <Text style={[tw`text-white mt-9 ml-3`, {fontFamily : "Poppins-Regular"}]}>Ikuti Live Event Terdekat</Text>
    </View>
    <View>
    <Text style={[tw`text-white mt-9`, {fontFamily : "Poppins-Regular"}]}>Lihat Semua</Text>
    </View>
  </View>

  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  <View style={tw`flex-row gap-5`}>
 <View>
 {DataEvent1.map((dataEvent, index) => (
          <EventLive key={index} Gambarku={dataEvent.Gambarku} Tanggal={dataEvent.Tanggal} Jam={dataEvent.Jam} Judul={dataEvent.Judul} Harga={dataEvent.Harga}/>
        ))}
    </View>
    <View>
    {DataEvent2.map((dataEvent, index) => (
          <EventLive key={index} Gambarku={dataEvent.Gambarku} Tanggal={dataEvent.Tanggal} Jam={dataEvent.Jam} Judul={dataEvent.Judul} Harga={dataEvent.Harga}/>
        ))}
    </View>
    </View>
  </ScrollView>

  <View style={tw`bg-neutral-800 h-84 mt-10  rounded-lg shadow-lg px-4 pt-4.5 mb-10`}>
    <View style={tw`flex-row gap-4 mb-8 ml-2 mt-2`}>
      <SimpleLineIcons name="book-open" style={tw`text-white mt-0.5`} size={20} />
      <Text style={[ tw`text-white text-lg`,{fontFamily : "Poppins-SemiBold"}]}>Mau Belajar Apa Hari ini</Text>
    </View>
        <View style={tw`flex-row flex-wrap justify-between `}>
  {flexMapel.map((data, index) => (
    <Belajar key={index} iconMapel={data.iconMapel} namaMapel={data.namaMapel} />
  ))}
</View>
      </View>

      <View style={tw`flex-row items-center mt-3 mb-3`}>
                <MaterialIcons name='celebration' color={'white'} size={25}/>
                <Text style={[tw`text-white text-base ml-2`, {fontFamily: 'Poppins-Regular'}]}>Terbaru di Ternak Uang!</Text>
              </View>
      <ScrollView horizontal>
                <View style={tw`flex-row gap-3 mb-5`}>
                {Kategorizz.map((item, index) => (
                <Kategori key={index} text={item.text} bgcolor={item.bgcolor}/>
                ))}
                </View>
              </ScrollView>
      <ScrollView horizontal style={tw`mb-10`}>
                  <View style={tw`flex-row gap-3`}>
                  {Module.map((item, index) => (
                <Modul key={index} img={item.img} title={item.title} lvl={item.lvl} vid={item.vid}/>
                ))}
                  </View>
              </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

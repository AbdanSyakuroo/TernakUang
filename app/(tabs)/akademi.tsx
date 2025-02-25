import tw from "twrnc";

import { AntDesign, Entypo, Feather, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
import { StyleSheet, Image, Platform, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from "expo-router";
import { useState } from "react";
import RecKelas from "@/components/RecKelas";

export default function TabTwoScreen() {

  const data = [
    { time: "01:24:28", title: "Investment Hack 101", date: "16 Jun 2022", img: require('@/assets/images/hometernak2.jpg')},
    { time: "01:24:28", title: "Investment Hack 101", date: "16 Jun 2022", img: require('@/assets/images/hometernak2.jpg')},
    { time: "01:24:28", title: "Investment Hack 101", date: "16 Jun 2022", img: require('@/assets/images/hometernak2.jpg')},
    { time: "01:24:28", title: "Investment Hack 101", date: "16 Jun 2022", img: require('@/assets/images/hometernak2.jpg')},
    { time: "01:24:28", title: "Investment Hack 101", date: "16 Jun 2022", img: require('@/assets/images/hometernak2.jpg')},
    { time: "01:24:28", title: "Investment Hack 101", date: "16 Jun 2022", img: require('@/assets/images/hometernak2.jpg')},
    { time: "01:24:28", title: "Investment Hack 101", date: "16 Jun 2022", img: require('@/assets/images/hometernak2.jpg')},
    { time: "01:24:28", title: "Investment Hack 101", date: "16 Jun 2022", img: require('@/assets/images/hometernak2.jpg')},
  ]

  return (
    <View style={tw`bg-black flex-1`}>
      <SafeAreaView style={tw`flex-1`}>
        <Text style={tw`text-white text-xl font-bold px-5 py-5`}>Akademi</Text>

        <View style={tw`flex-row items-center justify-center w-full`}>
          <View style={tw`py-2.5 flex-1`}>
            <Text style={tw`text-neutral-400 text-lg text-center`}>Modul Akademi</Text>
          </View>
          <View style={tw`py-2.5 border-b-2 border-white flex-1`}>
            <Text style={tw`text-white text-lg text-center`}>Recording Kelas</Text>
          </View>
        </View>

        <ScrollView 
          style={tw`px-5 py-5`} 
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        >
          <View style={tw`flex-row items-center justify-between flex-wrap gap-3`}>
            {data.map((item, index) => (
              <RecKelas key={index} time={item.time} title={item.title} date={item.date} img={item.img}/>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

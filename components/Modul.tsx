import { Image, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useFonts } from 'expo-font';

const Modul = ({ img, title, lvl, vid }) => {
  // Load font
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  // Jika font belum dimuat, tampilkan null atau loading
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={tw`bg-neutral-800 w-70 h-70 rounded-lg mt-5`}>
      <Image source={img} style={tw`w-70 h-40 rounded-t-lg`} />
      <Text style={[tw`mt-3 ml-2 text-lg text-white`, { fontFamily: 'Poppins-SemiBold' }]}>{title}</Text>
      <View style={tw`mx-2 flex-row justify-between mt-8`}>
        <Text style={[tw`text-neutral-400 text-lg`, { fontFamily: 'Poppins-Regular' }]}>{lvl}</Text>
        <Text style={[tw`bg-white p-1 w-16 rounded-full text-center`, { fontFamily: 'Poppins-SemiBold' }]}>{vid}</Text>
      </View>
    </View>
  );
};

export default Modul;

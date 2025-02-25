import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useCallback } from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonPrimary from '@/components/ButtonPrimary'

import Carousel from "react-native-reanimated-carousel";
const { width } = Dimensions.get("window");

const data = [
    { color: "#B0604D" },
    { color: "#899F9C" },
    { color: "#B3C680" },
    { color: "#5C6265" },
    { color: "#F5D399" },
    { color: "#F1F1F1" },
];
const index = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = useCallback(({ item }: { item: { color: string } }) => {
        return (
            <View>
                <View style={tw`mt-5`}>
                    <Text style={[tw`text-gray-400 text-center mx-4`, { fontFamily: 'Poppins-Regular' }]}>Belajar paling gampang, praktis &interaktif dengan menonton video secara online dengan lebih dari 150+ Video dari mentor yang sudah ahli di bidangnya</Text>
                </View>
            </View>
        );
    }, []);
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Image source={require('../assets/images/ternak2.png')} style={tw`w-[75] h-[100] mx-12 mt-18`} />
                    <View style={tw`mt-5`}>
                        <Text style={[tw`text-white text-center text-xl`, { fontFamily: 'Poppins-Bold' }]}>Belajar Investasi {'\n'}& Keuangan Pribadi</Text>
                        <View id="carousel-component">
                            <Carousel
                                loop
                                width={width}
                                height={100}
                                snapEnabled
                                pagingEnabled
                                autoPlayInterval={2000}
                                data={data}
                                renderItem={renderItem}
                                onProgressChange={(_, absoluteProgress) => {
                                    const index = Math.round(absoluteProgress) % data.length;
                                    setActiveIndex(index);
                                }}
                                style={{ width: '100%' }}
                            />
                        </View>
                        <View style={styles.paginationContainer}>
                            {data.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.dot,
                                        { backgroundColor: activeIndex === index ? '#97F69B' : 'gray' },
                                        activeIndex === index ? styles.activeDot : null,
                                    ]}
                                />
                            ))}
                        </View>
                    </View>
                    <View style={tw`mt-8`}>
                        <ButtonPrimary teXT="Sign In or Register" bgBtn="[#97F69B]" bgText="black" rute="auth/signin" />
                        <ButtonPrimary teXT="Find Content" bgBtn="[#000000]" bgText="white" borderColor="white" rute="auth/signin" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    card: {
        width: "100%", // Gunakan 100% agar mengikuti parent container
        minHeight: 200, // Beri minimal tinggi agar tidak terlalu kecil
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginRight: 8,
        padding: 16, // Tambahkan padding agar konten tidak terlalu mepet
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center", // Agar teks panjang tetap rapi di tengah
    },
    image: {
        width: "100%", // Agar gambar mengikuti lebar parent
        height: "auto", // Tinggi akan menyesuaikan aspek rasio
        resizeMode: "contain", // Agar gambar tidak terpotong
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        gap: 6,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    activeDot: {
        width: 25,
        height: 15,
        borderRadius: 15,
    },
});

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export const useLoadFonts = () => {
    const [fontsLoaded] = useFonts({
        "SpaceMono": require('../assets/fonts/SpaceMono-Regular.ttf'),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    });

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
            if (fontsLoaded) {
                setIsReady(true);
                await SplashScreen.hideAsync();
            }
        }
        prepare();
    }, [fontsLoaded]);

    return isReady;
};

import {SafeAreaProvider, SafeAreaView,} from "react-native-safe-area-context";
import Header from "./src/components/layout/Header";
import {PaperProvider} from "react-native-paper";
import {customTheme} from "./src/theme/customTheme";
import {useFonts} from "expo-font";
import {useEffect} from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const theme = customTheme;

function onFilterPressHandler() {
    console.log("Filter pressed");
}

export default function App() {

    const [fontsLoaded] = useFonts({
        'jet-brains-mono-light': require('./assets/fonts/JetBrainsMono-Light.otf'),
        'jet-brains-mono': require('./assets/fonts/JetBrainsMono-Regular.otf'),
        'jet-brains-mono-bold': require('./assets/fonts/JetBrainsMono-Bold.otf'),
        'jet-brains-mono-extra-bold': require('./assets/fonts/JetBrainsMono-ExtraBold.otf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
                <SafeAreaView style={{flex: 1}}>
                    <Header onFilterPress={onFilterPressHandler}/>
                </SafeAreaView>
            </PaperProvider>
        </SafeAreaProvider>
    );
}
import {View, StyleSheet} from "react-native";
import {useEffect} from "react";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {PaperProvider} from "react-native-paper";
import {SafeAreaProvider, SafeAreaView,} from "react-native-safe-area-context";
import {customTheme} from "./src/theme/customTheme";
import Header from "./src/components/layout/Header";
import StatisticMiniCard from "./src/components/common/StatisticMiniCard";

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
                    <View style={styles.statisticsContainer}>
                        <StatisticMiniCard quantity={12} label="Games" iconName="controller"/>
                        <StatisticMiniCard quantity={12} label="Hours" iconName="clock-time-three"/>
                        <StatisticMiniCard quantity={12} label="Spent" iconName="currency-usd"
                                           formatValue={(v) => `$${v}`}/>
                    </View>
                </SafeAreaView>
            </PaperProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    statisticsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    }
});

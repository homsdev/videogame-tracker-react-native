import {View, StyleSheet, FlatList} from "react-native";
import {useEffect} from "react";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {PaperProvider} from "react-native-paper";
import {SafeAreaProvider, SafeAreaView,} from "react-native-safe-area-context";
import {customTheme} from "./src/theme/customTheme";
import Header from "./src/components/layout/Header";
import StatisticMiniCard from "./src/components/common/StatisticMiniCard";
import SearchMotor from "./src/components/layout/SearchMotor";
import {GameCard} from "./src/components/common/GameCard";

SplashScreen.preventAutoHideAsync();

const theme = customTheme;

function onFilterPressHandler() {
    console.log("Filter pressed");
}

const DATA = [
    {
        id: 1,
        "title": "Starfield",
        "platform": "Play Station",
        "genre": "RPG",
        "hours": 12,
        "cost": 59.99,
        "rating": 2
    },
    {
        id: 2,
        "title": "Final Fantasy",
        "platform": "Play Station",
        "genre": "RPG",
        "hours": 12,
        "cost": 59.99,
        "rating": 2
    },
    {
        id: 3,
        "title": "Skyrim",
        "platform": "Play Station",
        "genre": "RPG",
        "hours": 12,
        "cost": 59.99,
        "rating": 2
    },
    {
        id: 4,
        "title": "Doom",
        "platform": "Play Station",
        "genre": "RPG",
        "hours": 12,
        "cost": 59.99,
        "rating": 2
    },
    {
        id: 5,
        "title": "Kingdom Hearts",
        "platform": "Play Station",
        "genre": "RPG",
        "hours": 12,
        "cost": 59.99,
        "rating": 2
    }
];

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
                    <FlatList
                        data={DATA}
                        keyExtractor={item => item.id.toString()}
                        ListHeaderComponent={
                            <>
                                <Header onFilterPress={onFilterPressHandler}/>
                                <View style={styles.statisticsContainer}>
                                    <StatisticMiniCard quantity={12} label="Games" iconName="controller"/>
                                    <StatisticMiniCard quantity={12} label="Hours" iconName="clock-time-three"/>
                                    <StatisticMiniCard quantity={12} label="Spent" iconName="currency-usd"
                                                       formatValue={(v) => `$${v}`}/>
                                </View>
                                <SearchMotor showAdvancedSearch={true}/>
                            </>
                        }
                        renderItem={({item}) => (
                            <GameCard
                                title={item.title}
                                platform={item.platform}
                                genre={item.genre}
                                hours={item.hours}
                                cost={item.cost}
                                rating={item.rating}
                            />
                        )}
                    />
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

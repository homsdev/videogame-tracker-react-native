import {View, StyleSheet, FlatList} from "react-native";
import {useEffect, useState} from "react";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {FAB as Fab, PaperProvider} from "react-native-paper";
import {SafeAreaProvider, SafeAreaView,} from "react-native-safe-area-context";
import {customTheme} from "./src/theme/customTheme";
import Header from "./src/components/layout/Header";
import StatisticMiniCard from "./src/components/common/StatisticMiniCard";
import SearchMotor from "./src/components/layout/SearchMotor";
import {GameCard} from "./src/components/common/GameCard";
import {Game} from "./src/types/Game";

import {GamesData} from "./src/store/GamesData";
import CreateGameForm from "./src/components/common/CreateGameForm";


SplashScreen.preventAutoHideAsync();

const theme = customTheme;

export default function App() {

    const [visibleModal, setVisibleModal] = useState(false);
    const [gamesList, setGamesList] = useState<Game[]>(GamesData);
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
    const [currentEditingGame, setCurrentEditingGame] = useState<Game>()

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

    function onFilterPressHandler() {
        setShowAdvancedFilters(prev => !prev);
    }

    function showModal() {
        setVisibleModal(true);
    }

    function hideModal() {
        setVisibleModal(false);
    }

    function handleEditGamePress(id: number) {
        setCurrentEditingGame(gamesList.find(game => game.id === id));
        setVisibleModal(true);
    }

    function handleDeleteGamePress(id: number) {
        setGamesList(prevGames => prevGames.filter(game => game.id !== id));
    }

    function handleOnAddGamePress() {
        setCurrentEditingGame(undefined);  // Clear any previous editing game
        setVisibleModal(true);
    }

    function submitCreateGameFormHandler(data: Game) {
        console.log('App Data:', data);
        if (gamesList.some((game: Game) => game.id === data.id)) {
            let updatedList = gamesList.map(game => {
                if (game.id === data.id) {
                    game.title = data.title;
                    game.platform = data.platform;
                    game.genre = data.genre;
                    game.hours = data.hours;
                    game.cost = data.cost;
                    game.rating = data.rating;
                }
                return game;
            })
            setGamesList(updatedList);
        } else {
            setGamesList(prevGames => [...prevGames, {...data, id: prevGames.length + 1}]);
        }
        setVisibleModal(false);
    }

    function onDismissHandler() {
        setVisibleModal(false);
        setCurrentEditingGame(undefined);
    }

    return (
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
                <SafeAreaView style={{flex: 1}}>
                    <CreateGameForm visible={visibleModal} onDismiss={onDismissHandler}
                                    onSubmit={submitCreateGameFormHandler} preFilled={currentEditingGame}/>
                    <FlatList
                        data={gamesList}
                        keyExtractor={item => item.id.toString()}
                        ListHeaderComponent={
                            <>
                                <Header onFilterPress={onFilterPressHandler}/>
                                <View style={styles.statisticsContainer}>
                                    <StatisticMiniCard quantity={gamesList.length} label="Games" iconName="controller"/>
                                    <StatisticMiniCard
                                        quantity={gamesList.reduce((acc, game) => acc + game.hours, 0)}
                                        label="Hours" iconName="clock-time-three"/>
                                    <StatisticMiniCard
                                        quantity={gamesList.reduce((acc, game) => acc + game.cost, 0)}
                                        label="Spent" iconName="currency-usd"
                                        formatValue={(v) => `$${v}`}/>
                                </View>
                                <SearchMotor showAdvancedSearch={showAdvancedFilters}/>
                            </>
                        }
                        renderItem={({item}) => (
                            <GameCard
                                id={item.id}
                                title={item.title}
                                platform={item.platform}
                                genre={item.genre}
                                hours={item.hours}
                                cost={item.cost}
                                rating={item.rating}
                                onDeletePress={handleDeleteGamePress}
                                onEditPress={handleEditGamePress}
                            />
                        )}
                    />
                    <Fab icon="plus" style={styles.addGameButton} onPress={handleOnAddGamePress}/>
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
    },
    addGameButton: {
        position: 'absolute',
        bottom: 88,
        right: 0,
        margin: 20
    }
});

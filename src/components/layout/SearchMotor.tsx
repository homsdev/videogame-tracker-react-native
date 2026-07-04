import {View, StyleSheet} from "react-native";
import {Chip, TextInput, Text} from "react-native-paper";
import {useAppTheme} from "../../theme/customTheme";
import {useState} from "react";

interface Props {
    showAdvancedSearch: boolean;
}

const BASIC_FILTERS = ['All', 'Playing', 'Done', 'Backlog', 'Dropped'];
const ADVANCED_FILTERS = ['All', 'Play Station', 'Xbox', 'PC', 'Switch', 'Mobile'];

function SearchMotor({showAdvancedSearch}: Readonly<Props>) {

    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const {colors} = useAppTheme();

    function handleFilterSelection(filter: string) {
        setSelectedFilters(prevFilters => {
            if (prevFilters.includes(filter)) {
                return prevFilters.filter(f => f !== filter);
            }
            return [...prevFilters, filter];
        });
    }


    const icon = <TextInput.Icon icon="magnify" color={colors.fontSecondary}/>

    let advanceFiltersTpl = null;

    if (showAdvancedSearch) {
        advanceFiltersTpl = <>
            {ADVANCED_FILTERS.map(filter => {
                const chipColor = selectedFilters.includes(filter)
                    ? colors.backgroundAccent : colors.backgroundLighter;

                return <Chip
                    selected={selectedFilters.includes(filter)}
                    key={filter}
                    style={{backgroundColor: chipColor}}
                    selectedColor={colors.fontAccent}
                    onPress={() => handleFilterSelection(filter)}
                    textStyle={{color: colors.fontSecondary}}
                    mode="outlined"
                >
                    {filter}
                </Chip>
            })
            }
        </>
    }


    return (
        <>
            <View style={styles.searchInput}>
                <TextInput
                    placeholder="Search by title genre or platform"
                    left={icon}
                    style={{backgroundColor: colors.backgroundLighter}}
                    contentStyle={{color: colors.fontPrimary}}
                />
            </View>
            <View style={styles.filterContainer}>
                {BASIC_FILTERS.map(filter => {
                    const chipColor = selectedFilters.includes(filter)
                        ? colors.backgroundAccent : colors.backgroundLighter;

                    return <Chip
                        selected={selectedFilters.includes(filter)}
                        key={filter}
                        style={{backgroundColor: chipColor}}
                        selectedColor={colors.fontAccent}
                        onPress={() => handleFilterSelection(filter)}
                        textStyle={{color: colors.fontSecondary}}
                        mode="outlined"
                    >{filter}</Chip>
                })}
            </View>
            {showAdvancedSearch && <Text variant="labelMedium" style={{color: colors.fontSecondary}}>PLATFORM</Text>}
            <View style={styles.filterContainer}>
                {advanceFiltersTpl}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    searchInput: {
        borderRadius: 24,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'transparent',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 12
    }
});

export default SearchMotor;
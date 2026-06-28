import {View, StyleSheet} from "react-native";
import {IconButton, Text} from 'react-native-paper';
import {useAppTheme} from "../../theme/customTheme";

function Header({onFilterPress}: { onFilterPress?: () => void }) {
    const {colors} = useAppTheme();
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text variant="labelMedium"
                      style={[styles.subtitle, {color: colors.fontAccent}]}>
                    Vaultlog
                </Text>
                <Text variant="headlineMedium"
                      style={[styles.title, {color: colors.fontPrimary}]}>
                    My Game Library
                </Text>
            </View>
            <View>
                <IconButton
                    mode="contained"
                    iconColor={colors.fontSecondary}
                    containerColor={colors.backgroundLighter}
                    icon="tune"
                    size={24}
                    style={{borderRadius: 16}}
                    onPress={onFilterPress}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        flexDirection: 'row',
    },
    logoContainer: {
        justifyContent: "flex-start",
    },
    subtitle: {
        textTransform: 'uppercase',
        fontFamily: 'jet-brains-mono-light',
        fontSize: 14,
    },
    title: {
        fontSize: 24,
        fontFamily: 'jet-brains-mono-extra-bold',
    },
});

export default Header;
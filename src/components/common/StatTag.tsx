import {View, StyleSheet} from "react-native";
import {useAppTheme} from "../../theme/customTheme";
import {Text, Icon} from "react-native-paper";

interface Props {
    type: string;
    children: string | number;
}

export function StatTag({type, children}: Readonly<Props>) {

    const {colors} = useAppTheme();

    let icon = null;
    if (type === 'hours') {
        icon = <Icon color={colors.fontAccent} size={16} source="clock-outline"/>
    }
    if (type === 'cost') {
        icon = <Icon color={colors.fontAccent} size={16} source="currency-usd"/>
    }
    if (type === 'rating') {
        icon = <Icon color='yellow' size={16} source="star"/>
    }

    return <View style={styles.container}>
        {icon}
        <Text style={{color: colors.fontSecondary}}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    }
});
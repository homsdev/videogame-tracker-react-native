import {StyleSheet, Text} from "react-native";
import {Avatar, Card} from "react-native-paper";
import {useAppTheme} from "../../theme/customTheme";

interface Props {
    quantity: number;
    label: string;
    iconName: string;
    formatValue?: (_value: number) => string;
}


function StatisticMiniCard({quantity, label, iconName, formatValue}: Readonly<Props>) {

    const {colors} = useAppTheme();

    const displayValue = formatValue ? formatValue(quantity) : String(quantity);

    const titleText = <Text style={[styles.title, {color: colors.fontPrimary}]}>{displayValue}</Text>;
    const subtitleText = <Text style={[styles.subtitle, {color: colors.fontSecondary}]}>{label}</Text>;

    const customIcon = () => <Avatar.Icon
        icon={iconName}
        size={30}
        color={colors.fontAccent}
    />

    return (
        <Card style={[styles.card, {backgroundColor: colors.backgroundLighter}]}>
            <Card.Title
                title={titleText}
                subtitle={subtitleText}
                left={customIcon}
                leftStyle={{marginRight: 5}}
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    title: {
        textTransform: 'uppercase',
        fontFamily: 'jet-brains-mono-bold'
    },
    subtitle: {
        textTransform: 'uppercase',
    },
    card: {
        width: '35%',
        margin: 5
    }
});

export default StatisticMiniCard;
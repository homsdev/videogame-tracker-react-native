import {View, StyleSheet} from "react-native";
import {IconButton, Text} from "react-native-paper";
import {useAppTheme} from "../../theme/customTheme";
import {useMemo} from "react";
import {StatTag} from "./StatTag";


interface Props {
    id: number;
    title: string;
    platform: string;
    genre: string;
    hours: number;
    cost: number;
    rating?: number;
    onEditPress: (id: number) => void;
    onDeletePress: (id: number) => void;
}

export function GameCard({
                             id,
                             title,
                             platform,
                             genre,
                             hours,
                             cost,
                             rating,
                             onDeletePress,
                             onEditPress
                         }: Readonly<Props>) {

    const {colors} = useAppTheme();
    const styles = useMemo(() => makeStyles(colors), [colors]);

    return (
        <View style={styles.card}>
            <View style={styles.cardHeaderContent}>
                <View style={styles.cardTitle}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{platform} · {genre}</Text>
                </View>
                <View style={styles.cardActions}>
                    <IconButton
                        style={styles.cardActionButton}
                        containerColor='#1D1D23'
                        icon='note-edit-outline'
                        iconColor={colors.fontSecondary}
                        size={24}
                        onPress={() => onEditPress(id)}
                        mode='contained'
                    />
                    <IconButton
                        style={styles.cardActionButton}
                        containerColor='#281A1F'
                        icon='delete'
                        iconColor={colors.error}
                        size={24}
                        onPress={() => onDeletePress(id)}
                        mode='contained'
                    />
                </View>
            </View>
            <View style={styles.cardFooterContent}>
                <View style={styles.statsContainer}>
                    <StatTag type='hours'>{hours} h</StatTag>
                    <StatTag type='cost'>{cost}</StatTag>
                    {rating && <StatTag type='rating'>{rating}</StatTag>}
                </View>
            </View>
        </View>
    );
}

const makeStyles = (colors: ReturnType<typeof useAppTheme>['colors']) => {
    return StyleSheet.create({
        card: {
            borderWidth: 1,
            borderColor: colors.fontSecondary,
            backgroundColor: colors.backgroundLighter,
            marginTop: 12,
            borderRadius: 16,
            padding: 20,
        },
        cardTitle: {},
        cardActions: {
            flexDirection: 'row',
        },
        cardActionButton: {
            borderRadius: 12
        },
        cardHeaderContent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        cardFooterContent: {
            marginTop: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        statsContainer: {
            flexDirection: 'row',
            gap: 12,
        },
        title: {
            color: colors.fontPrimary,
            fontSize: 18,
            fontFamily: 'jet-brains-mono-bold'
        },
        subtitle: {
            color: colors.fontSecondary,
            fontSize: 14,
        }
    });
}
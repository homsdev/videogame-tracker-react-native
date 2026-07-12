import {StyleSheet} from "react-native";
import {Text, TextProps} from "react-native-paper";
import {useAppTheme} from "../../theme/customTheme";
import {useMemo} from "react";


interface Props extends TextProps<any> {
    children: string;
}


function LabelText({children, style, ...props}: Readonly<Props>) {

    const {colors} = useAppTheme();

    const styles = useMemo(() => makeStyles(colors), [colors]);

    return <Text variant='labelSmall' style={[styles.labelText, style]} {...props}>{children}</Text>
}

const makeStyles = (colors: ReturnType<typeof useAppTheme>['colors']) => StyleSheet.create({
    labelText: {
        textTransform: 'uppercase',
        color: colors.fontSecondary,
        letterSpacing: 2,
        marginBottom: 8
    }
});

export default LabelText;
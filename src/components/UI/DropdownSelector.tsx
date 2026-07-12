import {Dropdown} from "react-native-element-dropdown";
import {useAppTheme} from "../../theme/customTheme";
import {StyleSheet} from "react-native";
import {useMemo} from "react";

interface Props {
    data: any[];
    value?: any;
    labelField: string;
    valueField: string;
    placeholder: string;
    onChange: (item: any) => void;
}

function DropdownSelector({data, valueField, labelField, placeholder, onChange, value}: Readonly<Props>) {

    const {colors} = useAppTheme();
    const styles = useMemo(() => makeStyles(colors), [colors]);

    return <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.dropdownText}
        selectedTextStyle={[styles.dropdownText]}
        itemContainerStyle={styles.itemContainer}
        itemTextStyle={styles.dropdownText}
        activeColor={colors.fontAccent}
        data={data}
        labelField={labelField}
        valueField={valueField}
        placeholder={placeholder}
        onChange={(item) => onChange(item)}
        value={value}
    />
}

const makeStyles = (colors: ReturnType<typeof useAppTheme>['colors']) => StyleSheet.create({
    dropdown: {
        flex: 1,
        backgroundColor: colors.backgroundLighter,
        height: 46,
        borderRadius: 12,
        padding: 10,
    },
    dropdownText: {
        color: colors.fontPrimary,
        fontFamily: 'jet-brains-mono-bold',
    },
    itemContainer: {
        backgroundColor: colors.backgroundLighter,
    }
});


export default DropdownSelector;

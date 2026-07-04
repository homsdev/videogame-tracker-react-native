import {configureFonts, MD3LightTheme as DefaultTheme, useTheme} from 'react-native-paper';
import {colors} from "./colors";

const fontConfig = configureFonts({
    config: {
        fontFamily: 'jet-brains-mono',
    }
});

export const customTheme = {
    ...DefaultTheme,
    fonts: fontConfig,
    colors: {
        ...DefaultTheme.colors,
        ...colors,
        fontPrimary: '#FFFFFF',
        fontSecondary: '#6A7282',
        fontAccent: '#00E8C6',
        backgroundLighter: '#131318',
        backgroundAccent: '#082829'
    },
};

export type AppTheme = typeof customTheme;

export const useAppTheme = () => useTheme<AppTheme>();
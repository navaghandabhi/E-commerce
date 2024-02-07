import { DefaultTheme } from "react-native-paper";

const quicksandMedium = 'Quicksand-Medium';
const quicksandBold = 'Quicksand-Bold';
const textColor = 'black';

export const Theme = {
    ...DefaultTheme,

    // Specify custom property in nested object
    colors: {
        ...DefaultTheme.colors,
        primary: '#0A1D56',
        myOwnColor: '#BADA55',
    },
    fonts: {
        ...DefaultTheme.fonts,
        displaySmall: {
            ...DefaultTheme.fonts.displaySmall,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        displayMedium: {
            ...DefaultTheme.fonts.displayMedium,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        displayLarge: {
            ...DefaultTheme.fonts.displayLarge,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        headlineSmall: {
            ...DefaultTheme.fonts.headlineSmall,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        headlineMedium: {
            ...DefaultTheme.fonts.headlineMedium,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        headlineLarge: {
            ...DefaultTheme.fonts.headlineLarge,
            fontFamily: quicksandBold,
            color: textColor,
        },
        titleSmall: {
            ...DefaultTheme.fonts.titleSmall,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        titleMedium: {
            ...DefaultTheme.fonts.titleMedium,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        titleLarge: {
            ...DefaultTheme.fonts.titleLarge,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        bodySmall: {
            ...DefaultTheme.fonts.bodySmall,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        bodyMedium: {
            ...DefaultTheme.fonts.bodyMedium,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        bodyLarge: {
            ...DefaultTheme.fonts.bodyLarge,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        labelSmall: {
            ...DefaultTheme.fonts.labelSmall,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        labelMedium: {
            ...DefaultTheme.fonts.labelMedium,
            fontFamily: quicksandMedium,
            color: textColor,
        },
        labelLarge: {
            ...DefaultTheme.fonts.labelLarge,
            fontFamily: quicksandMedium,
            color: textColor,
        },
    },
};

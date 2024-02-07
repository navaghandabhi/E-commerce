import { StyleSheet } from "react-native";
import { Theme } from "../Theme/theme";

export const style = StyleSheet.create({
    h1: {
        fontSize: 36,
        color: Theme.colors.secondary,
        fontFamily: 'Quicksand-Bold'
    },
    h2: {
        fontSize: 28,
        color: Theme.colors.secondary,
        fontFamily: 'Quicksand-Medium'
    },
    mh16: {
        marginHorizontal: 16,
    },
    mb8: {
        marginBottom: 8,
    },
    mv8: {
        marginVertical: 8
    },
    mb16: {
        marginBottom: 16,
    },
    rowSB:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
});
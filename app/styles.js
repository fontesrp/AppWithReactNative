import { StyleSheet } from "react-native";

const rowHeight = 60;

const appStyles = StyleSheet.create({
    listItem: {
        height: rowHeight,
        justifyContent: "center",
        borderColor: "#cbd2d9"
    },
    stdBackground: {
        backgroundColor: "#f8f9fa"
    },
    screenCenter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export {
    appStyles,
    rowHeight
};

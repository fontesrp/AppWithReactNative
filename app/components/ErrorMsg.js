import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { appStyles } from "../styles"

export default class ErrorMsg extends Component {

    render() {
        return (
            <View style={[appStyles.stdBackground, appStyles.screenCenter, this.props.style]}>
                <Text style={styles.error}>☹️</Text>
                <Text style={styles.error}>An error ocorred</Text>
                <Text style={styles.error}>{this.props.msg}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    error: {
        textAlign: "center"
    }
});

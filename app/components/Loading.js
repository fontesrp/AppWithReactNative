import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import { appStyles } from "../styles"

export default class Loading extends Component {

    render() {
        return (
            <View style={[appStyles.screenCenter, appStyles.stdBackground, this.props.style]}>
                <ActivityIndicator />
            </View>
        );
    }
}

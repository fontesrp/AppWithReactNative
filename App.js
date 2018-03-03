import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SideMenu from "react-native-side-menu";
import Menu from "./app/components/Menu";
import TodoList from "./app/components/TodoList";
import { appStyles } from "./app/styles";

export default class AwesomeProject extends Component {
    render() {

        return (
            <SideMenu menu={<Menu />}>
                <View style={[styles.container, appStyles.stdBackground]}>
                    <TodoList listId="1" />
                </View>
            </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

import React, { Component } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { List, ListItem } from "react-native-elements";
import IconFa from "react-native-vector-icons/FontAwesome";
import IconMc from "react-native-vector-icons/MaterialCommunityIcons";
import Loading from "./Loading"
import ErrorMsg from "./ErrorMsg"
import { appStyles } from "../styles"

const ADD_LIST_ID = -1;

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {

        const self = this;

        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(function (todoLists) {
                self.setState({
                    isLoading: false,
                    todoLists
                });
            })
            .catch(function (error) {

                console.log("[error] Menu.js componentDidMount:", error);

                self.setState({
                    isLoading: false,
                    error
                });
            });
    }

    menuItem(param) {

        return (
            <ListItem
                title={param.item.title}
                titleStyle={styles.listItemTitle}
                containerStyle={appStyles.listItem}
                onPress={() => this.selectItem(param.item.id)}
                underlayColor="#e2e6ea"
            />
        );
    }

    renderHeader() {

        return (
            <ListItem
                avatar={<IconFa name="plus" size={20} color="#bdc6cf" />}
                hideChevron
                title="Add new list"
                titleStyle={styles.listItemTitle}
                containerStyle={appStyles.listItem}
                onPress={() => this.selectItem(ADD_LIST_ID)}
                underlayColor="#e2e6ea"
            />
        );
    }

    selectItem(id) {
        alert(id);
    }

    render() {

        if (this.state.isLoading) {
            return (
                <Loading style={styles.menu} />
            );
        }

        if (this.state.error !== undefined) {
            return (
                <ErrorMsg msg={this.state.error} style={styles.menu} />
            );
        }

        return (
            <View style={styles.mainView}>
                <List containerStyle={{flex: 17}}>
                    <FlatList
                        data={this.state.todoLists}
                        renderItem={this.menuItem.bind(this)}
                        keyExtractor={item => String(item.id)}
                        ListHeaderComponent={this.renderHeader.bind(this)}
                    />
                </List>
                <IconMc name="drag-vertical" size={40} color="#bdc6cf" style={{flex: 3}} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    menu: {
        backgroundColor: "white"
    },
    listItemTitle: {
        color: "#212529"
    },
    mainView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    }
});

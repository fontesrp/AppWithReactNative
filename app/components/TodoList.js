import React, { Component } from "react";
import { FlatList } from "react-native";
import { List } from "react-native-elements";
import Loading from "./Loading";
import ErrorMsg from "./ErrorMsg";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {

        const self = this;

        return fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.listId}/comments`)
            .then(res => res.json())
            .then(function (todoItems) {
                self.setState({
                    isLoading: false,
                    todoItems
                });
            })
            .catch(function (error) {

                console.log("[error] TodoList.js componentDidMount:", error);

                self.setState({
                    isLoading: false,
                    error
                });
            });
    }

    findItemIdx(item, todoItems) {

        let itemIdx = -1;

        todoItems.find(function (td, idx) {

            if (td.id === item.id) {
                itemIdx = idx;
                return true;
            }

            return false;
        });

        return itemIdx;
    }

    deleteItem(item) {

        const todoItems = this.state.todoItems;

        const itemIdx = this.findItemIdx(item, todoItems);

        if (itemIdx !== -1) {

            const newItems = todoItems.slice();
            newItems.splice(itemIdx, 1);

            this.setState({
                todoItems: newItems
            });
        }
    }

    todoListItem(param) {

        return (
            <TodoItem
                param={param}
                onRemove={() => this.deleteItem(param.item)}
            />
        );
    }

    render() {

        if (this.state.isLoading) {
            return (
                <Loading />
            );
        }

        if (this.state.error !== undefined) {
            return (
                <ErrorMsg msg={this.state.error} />
            );
        }

        return (
            <List>
                <FlatList
                    data={this.state.todoItems}
                    renderItem={this.todoListItem.bind(this)}
                    keyExtractor={(item) => String(item.id)}
                    // ListHeaderComponent={this.renderHeader.bind(this)}
                />
            </List>
        );
    }
};

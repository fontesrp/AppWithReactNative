import React, { Component } from "react";
import { TouchableWithoutFeedback } from "react-native";
import IconFa from "react-native-vector-icons/FontAwesome";

export default class Checkbox extends Component {

    constructor(props) {

        super(props);

        this.state = {
            selected: false
        };
    }

    onPress() {

        const selected = !this.state.selected;

        this.setState({
            selected
        });

        if (typeof this.props.onPress === "function") {
            this.props.onPress(selected);
        }
    }

    render() {

        const iconName = (this.state.selected)
            ? "check-circle-o"
            : "circle-o";

        return (
            <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
                <IconFa name={iconName} size={30} color="#bdc6cf" />
            </TouchableWithoutFeedback>
        );
    }
}

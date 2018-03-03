import React, { Component } from "react";
import { Animated } from "react-native";
import { ListItem } from "react-native-elements";
import Swipeout from "react-native-swipeout";
import Checkbox from "./Checkbox";
import { appStyles, rowHeight } from "../styles";

const ANIMATION_DURATION = 250;

export default class TodoItem extends Component {

    constructor(props) {

        super(props);

        this._animated = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.timing(this._animated, {
            toValue: 1,
            duration: ANIMATION_DURATION,
        }).start();
    }

    onRemove() {

        const { onRemove } = this.props;

        if (typeof onRemove === "function") {

            Animated.timing(this._animated, {
                toValue: 0,
                duration: ANIMATION_DURATION,
            }).start(onRemove);
        }
    }

    render () {

        const item = this.props.param.item;

        const swipeBtns = [{
            text: "Delete",
            backgroundColor: "red",
            underlayColor: "rgba(255, 0, 0, 0.6)",
            onPress: this.onRemove.bind(this)
        }];

        const rowStyle = {
            height: this._animated.interpolate({
                inputRange: [0, 1],
                outputRange: [0, rowHeight],
                extrapolate: "clamp"
            })
        };

        return (
            <Animated.View style={rowStyle}>
                <Swipeout
                    right={swipeBtns}
                    autoClose="true"
                    backgroundColor= "transparent"
                >
                    <ListItem
                        title={item.name}
                        containerStyle={[appStyles.stdBackground, appStyles.listItem]}
                        hideChevron
                        avatar={<Checkbox onPress={alert} />}
                    />
                </Swipeout>
            </Animated.View>
        );
    }
};

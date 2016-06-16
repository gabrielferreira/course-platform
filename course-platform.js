import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "position": "relative",
        "minHeight": "100%"
    },
    "body": {
        "marginBottom": 60
    },
    "footer": {
        "position": "absolute",
        "bottom": 0,
        "width": "100%",
        "height": 60,
        "backgroundColor": "#f5f5f5"
    },
    "body > container": {
        "paddingTop": 60,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "container text-muted": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "footer > container": {
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "code": {
        "fontSize": "80%"
    }
});
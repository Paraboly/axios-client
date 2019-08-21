import React, { Component } from "react";
import { View, Text } from "react-native";
import { Api } from "./lib/src/index";

export default class App extends Component {
  constructor(props) {
    super(props);
    Api.setup({
      baseUrl: "https://www.mocky.io"
    });
    Api.get("/v2/5d5d175d330000593357b6ce")
      .then(res => console.log("res:", res))
      .catch(err => console.log("error: ", err));
  }

  render() {
    return (
      <View>
        <Text> App </Text>
      </View>
    );
  }
}

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";
import uuid from "uuid";

export default class next extends React.Component {

  state = {
    text: ""
  };
  handlePress =() => {
    alert("Button pressed!");
      firebase
        .database()
        .ref("people")
        .push({ name: this.state.text });
    };
  
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.name}
          placeholder="Enter Question"
          multiline={false}
          onChangeText={text => {
            console.log(text);
            this.setState({ text: text });
          }}
          value={this.state.name}
        />
        <TextInput
          style={styles.name}
          placeholder="Enter Answer"
          multiline={false}
          onChangeText={text => {
            console.log(text);
            this.setState({ text: text });
          }}
          value={this.state.name}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={this.handlePress}
        >
          <Text> add </Text>
        </TouchableOpacity>
      </View>
    )};
  
        };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  name: {
    color: "green",
    borderWidth: 2,
    borderColor: "grey",
    margin: 10
  },
  TouchableOpacity: {
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: "grey",
    margin: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});
